 'use client'

 import Link from "next/link";
 import React from "react";
 import { ThemeSwitcher } from "@/components/theme-switcher";
 import {
   Dumbbell,
   HeartPulse,
   Trophy,
   Clock,
   Smile,
   MessageCircle,
   Phone,
   Mail,
   MapPin,
   Calendar,
   ArrowRight,
   Instagram,
 } from "lucide-react";

export default function Home() {
  return (
    <main id="home" className="min-h-screen relative bg-background">
      {/* Decorative background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-[-20%] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-pink-500/10 to-rose-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="#home" className="font-bold tracking-tight text-xl">
            Flex <span className="text-primary">With JT</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex text-sm">
            <Link href="#why" className="hover:text-primary transition-colors">Why JT</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#packages" className="hover:text-primary transition-colors">Packages</Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/next" className="inline-flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-accent transition-colors">
              Flex Next <span className="text-[10px] rounded bg-amber-500/20 px-1.5 py-0.5 text-amber-700">Coming Soon</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:jt@jtfitness.com?subject=Free%20Consultation%20-%20Flex%20With%20JT"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Book Free Consult
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/next" className="md:hidden inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent transition" aria-label="Flex Next mobile link">
              Flex Next <span className="text-[10px] rounded bg-amber-500/20 px-1.5 py-0.5 text-amber-700">Soon</span>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Fitness training background"
            className="h-full w-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Boston, MA
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Professional personal training in the heart of Boston. Get fit, stay motivated, and achieve your goals with JT&#39;s proven methods.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
            >
              See Training Packages
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+16175550123"
              className="inline-flex items-center gap-2 rounded-md border px-5 py-3 font-medium hover:bg-accent transition"
            >
              <Phone className="h-4 w-4" /> Call (617) 555-0123
            </a>
            <Link
              href="/next"
              className="inline-flex items-center gap-2 rounded-md border px-5 py-3 font-medium hover:bg-accent transition"
              aria-label="Explore Flex Next platform (coming soon)"
            >
              Explore Flex Next <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2"><Trophy className="h-4 w-4 text-primary" /> 8+ years helping Bostonians get results</div>
            <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Flexible scheduling: early, mid-day, evenings</div>
          </div>
        </div>

        {/* Flex Next promo */}
        <div className="mt-8 rounded-xl border p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold">Flex Next — The Training Platform</h3>
            <p className="mt-1 text-sm text-muted-foreground">Buy training videos, chat with trainers, join the community, and more. <span className="text-amber-600">Coming soon.</span></p>
          </div>
          <Link href="/next" className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground sm:mt-0">
            Learn about Flex Next <ArrowRight className="h-4 w-4" /> <span className="text-[10px] rounded bg-amber-500/20 px-1.5 py-0.5 text-amber-700">Coming Soon</span>
          </Link>
        </div>
      </section>

      {/* Why Choose JT */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">Why Choose JT Fitness?</h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">Supportive, motivating coaching that makes training enjoyable and sustainable.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-xl border p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Dumbbell className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Personalized Training</h3>
            <p className="mt-2 text-sm text-muted-foreground">Custom workout plans tailored to your goals, fitness level, and lifestyle.</p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-xl border p-6 [animation-delay:100ms]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <HeartPulse className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Holistic Approach</h3>
            <p className="mt-2 text-sm text-muted-foreground">Strength, cardio, nutrition guidance, and mental wellness working together.</p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-xl border p-6 [animation-delay:200ms]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Proven Results</h3>
            <p className="mt-2 text-sm text-muted-foreground">Over 8 years helping Boston residents achieve their fitness goals.</p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-xl border p-6 [animation-delay:300ms]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Flexible Scheduling</h3>
            <p className="mt-2 text-sm text-muted-foreground">Early morning, lunch break, or evening sessions around your schedule.</p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-xl border p-6 [animation-delay:400ms]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Smile className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Friendly, Supportive Coaching</h3>
            <p className="mt-2 text-sm text-muted-foreground">Motivating accountability that makes training enjoyable and sustainable.</p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 rounded-xl border p-6 [animation-delay:500ms]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Priority Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">Quick responses and check-ins between sessions to keep you on track.</p>
          </div>
        </div>
      </section>

      {/* About JT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About JT</h2>
            <p className="mt-3 text-muted-foreground">Hi, I&#39;m JT, and I&#39;ve been passionate about fitness and helping others achieve their goals for over 8 years. My journey began as a college athlete at Boston University, where I discovered the transformative power of proper training and nutrition. Curious about my upcoming platform? <Link href="/next" className="underline underline-offset-4">Explore Flex Next</Link> <span className="text-xs text-amber-600">(coming soon)</span>.</p>
            <h3 className="mt-6 font-semibold">My Philosophy</h3>
            <p className="mt-2 text-muted-foreground">Fitness should be sustainable, enjoyable, and tailored to your unique lifestyle. I create personalized programs that consider your goals, schedule, preferences, and any physical limitations.</p>
          </div>
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="overflow-hidden rounded-xl border">
              <img src="https://images.pexels.com/photos/4753899/pexels-photo-4753899.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="JT training session in Boston" className="h-56 w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-6 rounded-xl border p-6">
              <h3 className="font-semibold">Education & Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-primary" /> Bachelor&#39;s in Exercise Science — Boston University</li>
                <li className="flex items-start gap-2"><span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-primary" /> NASM Certified Personal Trainer</li>
                <li className="flex items-start gap-2"><span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-primary" /> Precision Nutrition Level 1 Certified</li>
                <li className="flex items-start gap-2"><span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-primary" /> CPR/AED Certified</li>
                <li className="flex items-start gap-2"><span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-primary" /> Functional Movement Screen Certified</li>
              </ul>
              <h3 className="mt-6 font-semibold">Specializations</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center gap-2"><Dumbbell className="h-4 w-4 text-primary" /> Strength & Muscle Building</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> Weight Loss & Body Composition</li>
                <li className="flex items-center gap-2"><Trophy className="h-4 w-4 text-primary" /> Marathon & Running Prep</li>
                <li className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-primary" /> Functional Movement & Injury Prevention</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Nutrition Coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Training Packages</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">Choose the plan that fits your goals and schedule. Every session is 1:1 and tailored to you.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Single Session */}
          <div className="group rounded-xl border p-6 transition hover:shadow-lg">
            <h3 className="text-lg font-semibold">Single Session</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> 60-minute personal training session</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Customized workout plan</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Form correction and technique coaching</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Nutritional guidance</li>
            </ul>
            <a href="mailto:jt@jtfitness.com?subject=Single%20Session%20Inquiry" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition">Book now <ArrowRight className="h-4 w-4" /></a>
          </div>

          {/* 4-Session Package */}
          <div className="group rounded-xl border p-6 transition hover:shadow-lg">
            <h3 className="text-lg font-semibold">4-Session Package</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Four 60-minute training sessions</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Comprehensive fitness assessment</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Personalized workout and nutrition plan</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Progress tracking and adjustments</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Email support between sessions</li>
            </ul>
            <a href="mailto:jt@jtfitness.com?subject=4-Session%20Package%20Inquiry" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition">Book now <ArrowRight className="h-4 w-4" /></a>
          </div>

          {/* 8-Session Package */}
          <div className="group rounded-xl border p-6 transition hover:shadow-lg">
            <h3 className="text-lg font-semibold">8-Session Package</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Eight 60-minute training sessions</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Complete body composition analysis</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Detailed nutrition and supplement plan</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Home workout routines</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Unlimited text/email support</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Monthly progress photos and measurements</li>
            </ul>
            <a href="mailto:jt@jtfitness.com?subject=8-Session%20Package%20Inquiry" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition">Book now <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h4 className="font-semibold">Nutrition Consultation</h4>
            <p className="mt-2 text-sm text-muted-foreground">60-minute deep dive into your eating habits with personalized meal planning</p>
            <p className="mt-3 text-sm font-medium">$120</p>
          </div>
          <div className="rounded-xl border p-6">
            <h4 className="font-semibold">Group Training</h4>
            <p className="mt-2 text-sm text-muted-foreground">Small group sessions (2–4 people) for friends or family</p>
            <p className="mt-3 text-sm font-medium">$50 per person</p>
          </div>
          <div className="rounded-xl border p-6">
            <h4 className="font-semibold">Virtual Training</h4>
            <p className="mt-2 text-sm text-muted-foreground">Online training sessions via video call</p>
            <p className="mt-3 text-sm font-medium">$60 per session</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <div className="flex items-start gap-4">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&crop=faces" alt="Client headshot" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="text-lg">“JT helped me lose 30 pounds and gain confidence I never had. His approach is both challenging and supportive.”</p>
                <p className="mt-3 text-sm text-muted-foreground">— Sam R., Back Bay</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border p-6">
            <div className="flex items-start gap-4">
              <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&crop=faces" alt="Client headshot" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="text-lg">“After working with JT for 6 months, I completed my first Boston Marathon. His training methods are incredible.”</p>
                <p className="mt-3 text-sm text-muted-foreground">— Alina M., South End</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog highlights */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Fitness Tips from JT</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border p-6">
            <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Kettlebell training" className="mb-3 h-40 w-full rounded-md object-cover" loading="lazy" />
            <h3 className="font-semibold">Master the Kettlebell Swing</h3>
            <p className="mt-2 text-sm text-muted-foreground">Engage your posterior chain, build power, and burn serious calories. Start light, hinge at the hips, and let the bell float to chest height.</p>
          </article>
          <article className="rounded-xl border p-6">
            <img src="https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Running along the Charles River" className="mb-3 h-40 w-full rounded-md object-cover" loading="lazy" />
            <h3 className="font-semibold">Running in Boston</h3>
            <p className="mt-2 text-sm text-muted-foreground">From the Charles River Esplanade to hill repeats in Beacon Hill—build endurance smartly and enjoy the city as your training ground.</p>
          </article>
          <article className="rounded-xl border p-6">
            <img src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Barbell strength training" className="mb-3 h-40 w-full rounded-md object-cover" loading="lazy" />
            <h3 className="font-semibold">Strength Training Basics</h3>
            <p className="mt-2 text-sm text-muted-foreground">Focus on squat, hinge, push, pull, lunge, and carry. Progress gradually and fuel with enough protein for steady gains.</p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get Started Today</h2>
            <p className="mt-2 text-muted-foreground">Training in beautiful Boston — from the Charles River Esplanade to Boston Common, we&#39;ll make the city your gym.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> (617) 555-0123</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> jt@jtfitness.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Back Bay, Boston, MA — Mobile training citywide</div>
              <div className="flex items-center gap-3"><Calendar className="h-4 w-4 text-primary" /> Mon–Fri: 6am–8pm · Sat: 7am–6pm · Sun: 8am–5pm</div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:jt@jtfitness.com?subject=I%20want%20to%20get%20started" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition"><Mail className="h-4 w-4" /> Email JT</a>
              <a href="tel:+16175550123" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition"><Phone className="h-4 w-4" /> Call Now</a>
              <a href="#packages" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition">View Packages <ArrowRight className="h-4 w-4" /></a>
              <Link href="/next" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition">Flex Next (Coming Soon) <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Follow JT</h3>
            <p className="mt-2 text-sm text-muted-foreground">Stay tuned for training tips, session highlights, and Boston fitness spots.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent transition">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
            <div className="mt-6 rounded-lg bg-muted/30 p-4 text-sm text-muted-foreground">
              Prefer virtual? JT offers high-quality remote sessions via video call.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Flex With JT · Boston, MA</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Back to top</a>
            <Link href="/next" className="hover:text-primary transition-colors">Flex Next</Link>
            <ThemeSwitcher />
          </div>
        </div>
      </footer>
    </main>
  );
}
