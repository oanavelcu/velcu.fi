import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Client testimonials and success stories from individuals and organizations who have worked with Oana Velcu-Laitinen.',
}

interface Testimonial {
  name: string
  role: string
  company?: string
  content: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Matias Kupiainen",
    role: "Composer & Musician",
    content: "Working with Oana helped me understand the creative process in music composition from a completely new perspective. Her insights into flow and intuition transformed how I approach my work.",
  },
  {
    name: "John Bates",
    role: "Leadership Communication Coach",
    content: "Oana's approach to creativity in leadership communication is both practical and profound. Her work on rephrasing as an aspect of creativity has influenced my coaching practice significantly.",
  },
  {
    name: "Corporate Training Participant",
    role: "Team Lead",
    company: "Technology Company",
    content: "The creativity training session was transformative for our team. Oana's methods helped us break through conventional thinking patterns and develop innovative solutions to our challenges.",
  },
  {
    name: "Workshop Participant",
    role: "Research Professional",
    content: "Oana's workshop on emotional wellbeing at work provided practical tools that I use daily. Her understanding of the intersection between creativity and emotional intelligence is remarkable.",
  },
  {
    name: "Coaching Client",
    role: "Mid-level Manager",
    content: "Through personal coaching with Oana, I discovered my creative identity at work. The transformation in my leadership style and team dynamics has been incredible.",
  },
  {
    name: "Training Participant",
    role: "HR Director",
    company: "International Organization",
    content: "Oana's collaboration skills training revolutionized how our teams work together. The creative problem-solving techniques are now part of our organizational culture.",
  }
]

export default function TestimonialsPage() {
  return (
    <Layout hasHeroImage>
      <div>
        {/* Hero Image - Full width */}
        <div className="w-full">
          <Image
            className="w-full h-[70vh] object-cover"
            style={{ objectPosition: '50% 0%' }}
            src="/images/2016/12/DSC_1453webb.jpg"
            alt="Oana Velcu-Laitinen - Testimonials"
            width={1920}
            height={1080}
            priority
          />
        </div>

        {/* Header */}
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Testimonials
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                What people are saying about working with Oana Velcu-Laitinen on creativity, leadership, and personal development.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <blockquote className="text-gray-600 mb-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500">
                        {testimonial.role}
                        {testimonial.company && (
                          <span className="text-gray-400"> • {testimonial.company}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </Layout>
  )
}