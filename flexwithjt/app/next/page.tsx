export default function FlexNextPage() {
  return (
    <main className="min-h-screen">
      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Gym background"
            className="h-full w-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Under Construction · Coming Soon
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Flex Next Platform</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Flex Next is JT&#39;s upcoming digital platform for clients and trainers. Learn, train, connect, and grow with premium content, community, and tools.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">For Clients</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Purchase on-demand training videos and programs</li>
              <li>• Text chat with trainers for accountability and guidance</li>
              <li>• Watch curated content about strength, mobility, nutrition</li>
              <li>• Join community discussions and challenges</li>
              <li>• Buy Flex With JT merch and gear (print‑on‑demand)</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">For Trainers</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Create a public trainer profile with specialties</li>
              <li>• Publish paid videos, programs, and articles</li>
              <li>• Chat with clients and manage communities</li>
              <li>• Offer services and bundles, get paid securely</li>
              <li>• Sell print‑on‑demand merch linked to your brand</li>
            </ul>
          </div>
        </div>

        {/* Platform preview */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg border">
            <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Video library preview" className="h-40 w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-lg border">
            <img src="https://images.pexels.com/photos/4753899/pexels-photo-4753899.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Trainer profile preview" className="h-40 w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-lg border sm:col-span-2 md:col-span-1">
            <img src="https://images.pexels.com/photos/669579/pexels-photo-669579.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Community feed preview" className="h-40 w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mt-10 rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Roadmap</h2>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
            <li>• MVP: Video catalog, profiles, and checkout</li>
            <li>• Messaging: 1:1 text, file sharing, check‑ins</li>
            <li>• Community: Topics, events, leaderboards</li>
            <li>• Commerce: Print‑on‑demand integration</li>
            <li>• Analytics: Engagement and progress tracking</li>
            <li>• Mobile: Optimized PWA experience</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How It Works</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-5">
            <p className="text-xs font-medium text-muted-foreground">Step 1</p>
            <h3 className="mt-1 font-semibold">Create an account</h3>
            <p className="mt-2 text-sm text-muted-foreground">Set up your profile and preferences to personalize your experience.</p>
          </div>
          <div className="rounded-xl border p-5">
            <p className="text-xs font-medium text-muted-foreground">Step 2</p>
            <h3 className="mt-1 font-semibold">Browse content</h3>
            <p className="mt-2 text-sm text-muted-foreground">Explore programs and videos tailored to your goals and level.</p>
          </div>
          <div className="rounded-xl border p-5">
            <p className="text-xs font-medium text-muted-foreground">Step 3</p>
            <h3 className="mt-1 font-semibold">Engage & chat</h3>
            <p className="mt-2 text-sm text-muted-foreground">Message trainers, join communities, and stay accountable.</p>
          </div>
          <div className="rounded-xl border p-5">
            <p className="text-xs font-medium text-muted-foreground">Step 4</p>
            <h3 className="mt-1 font-semibold">Track progress</h3>
            <p className="mt-2 text-sm text-muted-foreground">Follow along, log sessions, and celebrate milestones.</p>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Pricing Preview</h2>
        <p className="mt-2 text-sm text-muted-foreground">Not final. We&#39;re validating with early users.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">Explore community and sample content</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Community access</li>
              <li>• Limited free videos</li>
              <li>• Basic profile</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Plus</h3>
            <p className="mt-1 text-sm text-muted-foreground">Paid programs and messaging</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• All Free features</li>
              <li>• Purchase premium videos/programs</li>
              <li>• 1:1 trainer messaging</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Pro (Trainers)</h3>
            <p className="mt-1 text-sm text-muted-foreground">Monetize content and services</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Public trainer profile</li>
              <li>• Sell videos and programs</li>
              <li>• Community management tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">When is Flex Next launching?</h3>
            <p className="mt-2 text-sm text-muted-foreground">We&#39;re targeting an early access beta soon. Join the waitlist to be notified.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">How do payments work?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Secure checkout for videos and programs. Trainers receive payouts on completed sales.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Can I be a trainer on the platform?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Yes — we&#39;re curating a small set of trainers first. Reach out to JT to discuss fit.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Will there be a mobile app?</h3>
            <p className="mt-2 text-sm text-muted-foreground">A mobile‑optimized PWA is planned initially, with native options under consideration.</p>
          </div>
        </div>
      </section>

      {/* Contact / Waitlist */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl bg-muted/30 p-6">
          <h3 className="font-semibold">Interested?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Trainers and clients: Flex Next is in development. If you&#39;re interested in early access or collaborating, contact JT:
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a href="mailto:jt@jtfitness.com?subject=Flex%20Next%20Early%20Access" className="inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground">Email JT</a>
            <a href="tel:+16175550123" className="inline-flex rounded-md border px-4 py-2 hover:bg-accent">Call (617) 555‑0123</a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Note: This page is informational and will evolve as features ship.</p>
        </div>
      </section>
    </main>
  );
}
