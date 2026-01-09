"use client"

interface CookieNoticeProps {
  onClose: () => void
}

export default function CookieNotice({ onClose }: CookieNoticeProps) {
  return (
    <div className="fixed bottom-4 right-4 max-w-sm z-40 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-card border-2 border-primary rounded-xl p-4 glow-cyan">
        <div className="mb-4">
          <div className="text-lg font-semibold text-primary mb-2">🧫 Laboratory Experiment</div>
          <p className="text-sm text-muted-foreground">
            We use cookies to optimize your brewing formula and analyze water preferences. Your data remains in our
            secure lab.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/80 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-card border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  )
}
