import React, { useState, useEffect } from 'react';
import { auth, saveUserProfile, getAllUserProfiles, UserProfileData } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { 
  User, LogOut, ShieldCheck, Database, RefreshCw, CheckCircle2, 
  Award, FileText, Check, AlertTriangle, UploadCloud, Landmark, 
  CreditCard, Eye, X, Sparkles, LogIn, ChevronDown, ChevronUp, CheckCircle,
  Phone, MessageSquare, Mail
} from 'lucide-react';

interface UserProfileProps {
  streak: number;
  bookmarkedCount: number;
  answeredCount: number;
  chaptersProgress: Record<number, number>;
  onSyncDb?: () => Promise<void>;
  isAdmin?: boolean;
  isPremium?: boolean;
  paymentStatus?: 'none' | 'pending' | 'approved' | 'rejected';
  paymentReceiptName?: string;
  paymentReceiptDate?: string;
  paymentReceiptBase64?: string;
  onRefreshProfile?: () => Promise<void>;
  isGuest?: boolean;
  onSignInRequest?: () => void;
}

export default function UserProfile({ 
  streak, 
  bookmarkedCount, 
  answeredCount, 
  chaptersProgress, 
  onSyncDb, 
  isAdmin,
  isPremium = false,
  paymentStatus = 'none',
  paymentReceiptName = '',
  paymentReceiptDate = '',
  paymentReceiptBase64 = '',
  onRefreshProfile,
  isGuest = false,
  onSignInRequest
}: UserProfileProps) {
  const currentUser = auth.currentUser;
  
  // App sync states
  const [syncing, setSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  // Admin users lists
  const [userList, setUserList] = useState<UserProfileData[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userActionId, setUserActionId] = useState<string | null>(null);
  const [receiptPreviewBase64, setReceiptPreviewBase64] = useState<string | null>(null);
  const [expandedUserIds, setExpandedUserIds] = useState<Record<string, boolean>>({});

  // Client uploader state
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  // Fetch admin user checklist
  const fetchAllUsers = async () => {
    if (!isAdmin) return;
    setLoadingUsers(true);
    try {
      const data = await getAllUserProfiles();
      // Sort: pending first, then premiums, then others
      const sorted = [...data].sort((a, b) => {
        const scoreA = a.paymentStatus === 'pending' ? 3 : a.isPremium ? 1 : 0;
        const scoreB = b.paymentStatus === 'pending' ? 3 : b.isPremium ? 1 : 0;
        return scoreB - scoreA;
      });
      setUserList(sorted);
    } catch (err) {
      console.error("Failed to load user records for administration", err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchAllUsers();
    }
  }, [isAdmin]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error signing out user", err);
    }
  };

  const handleSync = async () => {
    if (!onSyncDb) return;
    setSyncing(true);
    setSyncSuccess(false);
    setSyncError(null);
    try {
      await onSyncDb();
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 4000);
    } catch (err: any) {
      console.error("Database sync failed", err);
      setSyncError(err?.message || "Sync error occurred.");
    } finally {
      setSyncing(false);
    }
  };

  // Image compressor using Canvas to fit Firestore doc sizes
  const processAndUploadFile = (file: File) => {
    if (!currentUser) return;
    setUploadError(null);
    setUploadLoading(true);

    if (!file.type.match(/image\/*/)) {
      setUploadError("Please provide a valid receipt document image (JPG, PNG).");
      setUploadLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = async () => {
        try {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 500; // Optimal resolution
          const scale = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scale;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          // Compressed 65% quality JPEG represents a tiny file (<50KB) but readable quality
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.65);

          await saveUserProfile(currentUser.uid, {
            paymentStatus: 'pending',
            paymentReceiptName: file.name,
            paymentReceiptDate: new Date().toLocaleString('it-IT'),
            paymentReceiptBase64: compressedBase64,
            isPremium: false
          });

          if (onRefreshProfile) {
            await onRefreshProfile();
          }
        } catch (err: any) {
          console.error(err);
          setUploadError("Could not upload receipt metadata. Please try again.");
        } finally {
          setUploadLoading(false);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      setUploadError("Failed to read the file.");
      setUploadLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processAndUploadFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processAndUploadFile(file);
    }
  };

  // Admin action triggers
  const handleAdminApprove = async (userId: string) => {
    setUserActionId(userId);
    try {
      await saveUserProfile(userId, {
        isPremium: true,
        paymentStatus: 'approved'
      });
      await fetchAllUsers();
    } catch (err) {
      console.error(err);
    } finally {
      setUserActionId(null);
    }
  };

  const handleAdminReject = async (userId: string) => {
    setUserActionId(userId);
    try {
      await saveUserProfile(userId, {
        isPremium: false,
        paymentStatus: 'rejected'
      });
      await fetchAllUsers();
    } catch (err) {
      console.error(err);
    } finally {
      setUserActionId(null);
    }
  };

  const toggleUserRow = (userId: string) => {
    setExpandedUserIds(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  // Guest users custom rendering
  if (isGuest) {
    return (
      <div className="max-w-md mx-auto px-4 md:px-6 py-6" id="profile-container">
        <div className="bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-xs flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 rounded-full bg-slate-50 border border-gray-150 flex items-center justify-center text-slate-400">
            <User size={28} />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
              GUEST STUDENT MODE
            </span>
            <h3 className="text-base font-bold text-[#1d2b3e] mt-2">
              Explore Guida Sicura Free
            </h3>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed px-2">
              You are currently preparing materials without an active account. Registered members can save driving glossary terms, track quiz answers, and purchase premium components.
            </p>
          </div>

          <div className="w-full border-t border-gray-100 my-1" />

          {/* Action to request login block */}
          {onSignInRequest && (
            <button
              onClick={onSignInRequest}
              type="button"
              className="w-full bg-[#1d2b3e] text-white hover:bg-slate-800 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
            >
              <LogIn size={14} />
              <span>Create Account / Sign In</span>
            </button>
          )}

          {/* Promotional lock rate display */}
          <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-[#1d2b3e] font-sans flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-500" />
              <span>Unlock all 16 Chapters for €20</span>
            </h4>
            <p className="text-[11px] text-gray-550 leading-relaxed font-sans">
              Get comprehensive access to the entire driving school manual, bilingual Persian/Italian quiz modules, and lexical helpers with real-time sync across devices.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 md:px-6 py-6" id="profile-container">
      <div className="bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-xs flex flex-col gap-6">
        
        {/* Profile Card Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 pb-2">
          <div className="w-16 h-16 rounded-full bg-slate-50 border border-gray-150 flex items-center justify-center text-[#1d2b3e] relative">
            <User size={28} strokeWidth={1.8} />
            {isPremium && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-amber-950 p-1 rounded-full border border-white" title="Premium Access Active">
                <Award size={10} strokeWidth={3} />
              </span>
            )}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h3 className="text-base font-bold text-[#1d2b3e] truncate max-w-[240px]">
                {currentUser?.email || 'Registered Student'}
              </h3>
              {isPremium ? (
                <span className="text-[9px] bg-amber-500/10 text-amber-600 border border-amber-500/10 hover:bg-amber-100 px-2 py-0.5 rounded-full font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                  <Sparkles size={8} /> Premium
                </span>
              ) : (
                <span className="text-[9px] bg-slate-100 text-slate-500 px-2' py-0.5 px-2 py-0.5 rounded-full font-mono font-bold tracking-wider uppercase">
                  Free Learner
                </span>
              )}
            </div>
            
            <p className="text-xs text-gray-400 leading-normal font-medium">
              Registered Profile • {streak} Day Streak
            </p>
          </div>
        </div>

        {/* Course Statistics Board */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-3 text-center space-y-0.5">
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase block">Bookmarks</span>
            <span className="text-lg font-black text-[#1d2b3e] block">{bookmarkedCount}</span>
          </div>
          <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-3 text-center space-y-0.5">
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase block">Solved Qs</span>
            <span className="text-lg font-black text-[#1d2b3e] block">{answeredCount}</span>
          </div>
          <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-3 text-center space-y-0.5">
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase block">Chapters</span>
            <span className="text-lg font-black text-[#1d2b3e] block">
              {Object.keys(chaptersProgress).length}/16
            </span>
          </div>
        </div>

        <div className="w-full border-t border-gray-100 my-1" />

        {/* PREMIUM ACQUISITION AREA */}
        {!isPremium && (
          <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-4" id="premium-shop-block">
            <div className="flex flex-col items-center text-center gap-3 mt-2">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 border border-amber-100 shadow-2xs">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1d2b3e] tracking-tight">Unlock Premium Content</h4>
                <p className="text-xs text-slate-500 mt-1">Unlock Chapters 2–16, localized dictionary filters, and all 1000+ verification quiz cards.</p>
              </div>
            </div>

            {/* Core required prompt message exactly as formatted */}
            <div className="bg-white border border-slate-150 rounded-2xl p-4 text-center">
              <p className="text-slate-700 text-xs font-medium leading-relaxed font-sans whitespace-pre-line">
                To purchase the full course for €20, please contact us using one of the communication methods listed below.

                Thank you.
              </p>
            </div>

            {/* Direct Communication Channels Grid */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] tracking-wider uppercase font-extrabold font-mono text-slate-400 text-center">
                Direct Contact Methods
              </span>
              
              <a 
                href="https://wa.me/393757444945" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#25d366]/20 bg-[#25d366]/5 hover:bg-[#25d366]/10 text-[#128c7e] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare size={16} className="text-[#25d366]" />
                  <span className="text-xs font-bold font-sans">WhatsApp Chat Support</span>
                </div>
                <span className="text-[10px] font-mono select-all bg-white border border-[#25d366]/10 px-2 py-0.5 rounded text-slate-600">+39 375 744 4945</span>
              </a>

              <a 
                href="https://t.me/PatenteFocus" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#0088cc]/20 bg-[#0088cc]/5 hover:bg-[#0088cc]/10 text-[#006699] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#0088cc]" />
                  <span className="text-xs font-bold font-sans">Telegram Account</span>
                </div>
                <span className="text-[10px] font-mono select-all bg-white border border-[#0088cc]/10 px-2 py-0.5 rounded text-slate-600">@PatenteFocus</span>
              </a>

              <a 
                href="mailto:akhavi98@gmail.com?subject=Patente Focus Course Access €20"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-705 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-slate-505" />
                  <span className="text-xs font-bold font-sans">Email Support</span>
                </div>
                <span className="text-[10px] font-mono select-all bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">akhavi98@gmail.com</span>
              </a>
            </div>
          </div>
        )}

        {/* PREMIUM ACTIVE BRAND CARD */}
        {isPremium && (
          <div className="bg-emerald-500/[0.04] border border-emerald-500/20 rounded-2xl p-5 text-center space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/[0.02] rounded-full translate-x-4 -translate-y-4" />
            <div className="w-11 h-11 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle size={20} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest font-mono text-emerald-805">
                Premium License Active
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-sm mx-auto mt-1">
                You have unrestricted premium access to all 16 chapters, practice quizzes, and full Persian-Italian vocabulary cards. Study with ease!
              </p>
            </div>
          </div>
        )}

        {/* ADMIN USER MONITOR PANEL */}
        {isAdmin && (
          <div className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl p-5 text-left space-y-4 shadow-2xs mt-1" id="admin-panel">
            <div className="flex items-center justify-between border-b border-slate-150 pb-2 mb-2">
              <div className="flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-600" size={18} />
                <h4 className="text-xs font-extrabold uppercase tracking-wider font-mono">Pannello Amministratore</h4>
              </div>

              <button 
                onClick={fetchAllUsers}
                disabled={loadingUsers}
                className="p-1 text-slate-400 hover:text-slate-750 transition-colors"
                title="Refresh Records"
              >
                <RefreshCw size={12} className={loadingUsers ? 'animate-spin' : ''} />
              </button>
            </div>

            {/* DB Sync Trigger */}
            <div className="space-y-2">
              <p className="text-[11px] text-gray-550 leading-relaxed font-sans">
                Forza l&apos;aggiornamento del database Firestore locale con i nuovi contenuti di capitoli e domande nel codice.
              </p>
              <button
                onClick={handleSync}
                disabled={syncing}
                type="button"
                className={`w-full py-2 px-4 rounded-lg text-[11px] font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  syncSuccess 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50'
                }`}
              >
                {syncing ? (
                  <>
                    <RefreshCw className="animate-spin" size={11} />
                    <span>Sincronizzazione...</span>
                  </>
                ) : syncSuccess ? (
                  <>
                    <CheckCircle2 size={11} />
                    <span>Seeding Completato!</span>
                  </>
                ) : (
                  <>
                    <Database size={11} />
                    <span>Sincronizza / Seed Database</span>
                  </>
                )}
              </button>
            </div>

            {/* SEPARATOR */}
            <div className="border-t border-slate-250/20 my-3" />

            {/* MANAGE PAYMENTS LIST */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-widest font-black text-slate-500">
                  Manage Users & payments ({userList.length})
                </span>
                {loadingUsers && <span className="text-[9px] font-mono font-bold text-slate-400 animate-pulse">loading...</span>}
              </div>

              {userList.length === 0 ? (
                <p className="text-[11px] text-slate-400 text-center font-sans py-2">
                  Nessun record utente registrato nel database.
                </p>
              ) : (
                <div className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
                  {userList.map((usr) => {
                    const isExpanded = expandedUserIds[usr.userId] || false;
                    const hasReceipt = usr.paymentReceiptBase64 ? true : false;
                    
                    return (
                      <div 
                        key={usr.userId} 
                        className={`border rounded-xl p-3 bg-white transition-all ${
                          usr.paymentStatus === 'pending' 
                            ? 'border-amber-200 bg-amber-50/[0.03]' 
                            : 'border-slate-150'
                        }`}
                      >
                        {/* Summary Line */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <span 
                              onClick={() => toggleUserRow(usr.userId)}
                              className="text-[11px] font-bold text-slate-800 hover:underline cursor-pointer block truncate"
                            >
                              {usr.userId === currentUser?.uid 
                                ? `Me (Admin) - ${usr.email || currentUser?.email || ''}` 
                                : (usr.email || `No Email Synced (UID: ${usr.userId.slice(0, 8)}...)`)}
                            </span>
                            <span className="text-[9px] text-[#1d2b3e]/60 font-mono block">
                              Chapters Progress: {Object.keys(usr.chaptersProgress || {}).length} • Streak: {usr.streak || 0}
                            </span>
                          </div>

                          {/* Account status badges */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            {usr.paymentStatus === 'pending' && (
                              <span className="text-[8px] bg-amber-400 text-amber-955 px-1.5 py-0.5 rounded font-mono font-black animate-pulse">PENDING</span>
                            )}
                            {usr.isPremium ? (
                              <span className="text-[8px] bg-emerald-105 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-mono font-bold">PREMIUM</span>
                            ) : (
                              <span className="text-[8px] bg-slate-105 bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded font-mono font-bold">FREE</span>
                            )}

                            <button
                              onClick={() => toggleUserRow(usr.userId)}
                              className="p-1 hover:bg-slate-50 rounded text-slate-500"
                            >
                              {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                            </button>
                          </div>
                        </div>

                        {/* Expandable rows */}
                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-slate-150 space-y-3 animate-fade-in text-xs font-sans text-slate-700">
                            {/* Receipt Image Thumbnail preview inside admin row */}
                            {hasReceipt && usr.paymentReceiptBase64 && (
                              <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 space-y-2">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="text-[9px] font-mono font-black text-slate-400 uppercase">Receipt Document</span>
                                    <span className="text-[10px] text-slate-750 font-medium block truncate max-w-[200px]">{usr.paymentReceiptName}</span>
                                  </div>
                                  <button
                                    onClick={() => setReceiptPreviewBase64(usr.paymentReceiptBase64 || null)}
                                    type="button"
                                    className="p-1 px-1.5 bg-white border border-slate-205 rounded text-[10px] font-bold text-slate-505 hover:bg-slate-5 relative flex items-center gap-1"
                                  >
                                    <Eye size={10} />
                                    <span>Full Image</span>
                                  </button>
                                </div>
                                <div 
                                  onClick={() => setReceiptPreviewBase64(usr.paymentReceiptBase64 || null)}
                                  className="w-full h-24 bg-cover bg-center rounded-lg border border-slate-200 cursor-zoom-in relative group overflow-hidden" 
                                  style={{ backgroundImage: `url(${usr.paymentReceiptBase64})` }}
                                >
                                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-[9px] uppercase tracking-wider font-extrabold gap-1">
                                    <Eye size={12} /> Click to zoom
                                  </div>
                                </div>
                                <span className="text-[9px] text-gray-400 block font-mono">Date Uploaded: {usr.paymentReceiptDate}</span>
                              </div>
                            )}

                            {/* Verification trigger row buttons */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAdminApprove(usr.userId)}
                                disabled={userActionId !== null}
                                type="button"
                                className="flex-1 py-1.5 px-3 bg-[#1d2b3e] text-white hover:bg-slate-800 disabled:opacity-50 text-[10px] font-bold tracking-wide uppercase rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                {userActionId === usr.userId ? <RefreshCw className="animate-spin" size={10} /> : <Check size={11} />}
                                <span>Approve (Premium)</span>
                              </button>
                              <button
                                onClick={() => handleAdminReject(usr.userId)}
                                disabled={userActionId !== null}
                                type="button"
                                className="flex-1 py-1.5 px-3 bg-red-50 text-red-750 hover:bg-red-100 disabled:opacity-50 text-[10px] font-bold tracking-wide uppercase rounded-lg flex items-center justify-center gap-1.5 cursor-pointer border border-red-200"
                              >
                                {userActionId === usr.userId ? <RefreshCw className="animate-spin" size={10} /> : <X size={11} />}
                                <span>Reject</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Separator lines */}
        <div className="w-full border-t border-gray-100" />

        {/* Logout action block */}
        <button
          onClick={handleSignOut}
          type="button"
          className="w-full bg-red-50 text-red-700 hover:bg-red-100/80 active:scale-[0.98] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <LogOut size={13} />
          <span>Close Session (Log Out)</span>
        </button>

      </div>

      {/* Lightbox Receipt Base64 Zoom overlay */}
      {receiptPreviewBase64 && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full flex flex-col gap-3 relative">
            <button 
              onClick={() => setReceiptPreviewBase64(null)}
              className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
            
            <div className="bg-white border rounded-3xl overflow-hidden p-2 flex justify-center items-center max-h-[80vh]">
              <img 
                src={receiptPreviewBase64} 
                alt="Receipt Verification" 
                className="max-h-[75vh] max-w-full object-contain rounded-2xl" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-center text-xs text-white/70 font-sans tracking-wide">
              Close Zoom by clicking the X button above or anywhere outside.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
