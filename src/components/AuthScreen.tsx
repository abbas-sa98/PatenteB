import React, { useState } from 'react';
import { auth, saveUserProfile } from '../lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';
import { Mail, Lock, LogIn, UserPlus, AlertCircle, ArrowRight, Chrome, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AuthScreenProps {
  onAuthSuccess: () => void;
  onContinueAsGuest?: () => void;
}

export default function AuthScreen({ onAuthSuccess, onContinueAsGuest }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Parse standard Firebase Auth error messages to clear, friendly statements
  const getFriendlyErrorMessage = (errCode: string): string => {
    switch (errCode) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Incorrect email or password. Please try again.';
      case 'auth/email-already-in-use':
        return 'This email is already registered. Try logging in instead.';
      case 'auth/weak-password':
        return 'Password is too weak. Please use at least 6 characters.';
      case 'auth/network-request-failed':
        return 'Network connection issue. Please check your internet connection.';
      case 'auth/operation-not-allowed':
        return 'This sign-in method is not enabled in your Firebase Console. Please go to your Firebase project, navigate to "Authentication" > "Sign-in method", and enable "Email/Password" and "Google" providers.';
      case 'auth/popup-closed-by-user':
        return 'The Google login popup was closed. Please try again, ensure your browser doesn\'t block popups, or use the email/password option.';
      default:
        return 'Something went wrong. Please check your configuration and try again.';
    }
  };

  const handleEmailPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Client validations
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all the required fields.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        // Sign IN
        await signInWithEmailAndPassword(auth, email.trim(), password);
      } else {
        // Sign UP / Registration
        await createUserWithEmailAndPassword(auth, email.trim(), password);
      }
      onAuthSuccess();
    } catch (err: any) {
      console.error(err);
      setError(getFriendlyErrorMessage(err.code || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onAuthSuccess();
    } catch (err: any) {
      console.error(err);
      setError(getFriendlyErrorMessage(err.code || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4" id="auth-portal-wrapper">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-gray-150 rounded-3xl p-8 shadow-sm flex flex-col gap-6"
        id="auth-credentials-card"
      >
        {/* Header Title with Branding to match Guida Sicura */}
        <div className="text-center">
          <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-400">
            GUIDA SICURA SYSTEM
          </span>
          <h2 className="text-2xl font-black text-[#1d2b3e] tracking-tight font-sans mt-1">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
            {isLogin 
              ? 'Access your saved driving vocabulary and synchronized progress.' 
              : 'Register your driving theory journal across sessions.'}
          </p>
        </div>

        {/* Display Error details banner */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-50/70 border border-red-150 p-3.5 rounded-xl text-xs text-red-850 flex items-start gap-2.5 leading-relaxed"
            >
              <AlertCircle size={15} className="text-red-550 shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Credentials Form fields mapping */}
        <form onSubmit={handleEmailPasswordSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                <Mail size={14} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 outline-none focus:border-[#1d2b3e] focus:ring-1 focus:ring-[#1d2b3e] bg-slate-50/30 transition-all font-medium text-[#1d2b3e]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                <Lock size={14} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 outline-none focus:border-[#1d2b3e] focus:ring-1 focus:ring-[#1d2b3e] bg-slate-50/30 transition-all font-medium text-[#1d2b3e]"
              />
            </div>
          </div>

          {/* Confirm password only in Register mode */}
          <AnimatePresence initial={false}>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col gap-1.5 overflow-hidden"
              >
                <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                    <Lock size={14} />
                  </span>
                  <input
                    type="password"
                    required={!isLogin}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 outline-none focus:border-[#1d2b3e] focus:ring-1 focus:ring-[#1d2b3e] bg-slate-50/30 transition-all font-medium text-[#1d2b3e]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1d2b3e] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                {isLogin ? <LogIn size={13} /> : <UserPlus size={13} />}
              </>
            )}
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center gap-3">
          <div className="flex-1 border-t border-gray-150" />
          <span className="text-[10px] font-mono font-bold text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-150" />
        </div>

        <div className="flex flex-col gap-2">
          {/* Google SignIn Option */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            disabled={loading}
            className="w-full bg-white text-slate-700 border border-gray-200 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Chrome size={13} className="text-red-500" />
            <span>Continue with Google</span>
          </button>

          {onContinueAsGuest && (
            <button
              onClick={onContinueAsGuest}
              type="button"
              disabled={loading}
              className="w-full bg-slate-50 text-slate-755 border border-gray-200 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-100 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <User size={13} className="text-slate-500" />
              <span>Continue as Guest</span>
            </button>
          )}
        </div>

        {/* Switching view toggler links */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
            }}
            className="text-xs text-slate-500 hover:text-[#1d2b3e] hover:underline cursor-pointer font-medium bg-transparent border-none"
          >
            {isLogin 
              ? "Don't have an account? Sign Up" 
              : "Already have an account? Sign In"}
          </button>
        </div>

        {/* Walkthrough Tip for Email Password Provider */}
        <div className="p-3 bg-slate-50 border border-gray-150 rounded-xl text-[10px] text-gray-400 leading-normal font-sans">
          <p className="font-bold text-[#1d2b3e] mb-0.5">Firebase Console Setup Tip:</p>
          Make sure <strong>Email/Password</strong> authentication provider is enabled in your Firebase console under <strong>Build &gt; Authentication &gt; Sign-in method</strong>.
        </div>
      </motion.div>
    </div>
  );
}
