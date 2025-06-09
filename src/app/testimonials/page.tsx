import OptimizedImage from '@/components/ui/OptimizedImage'
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
    name: "F. Kananen",
    role: "Participant course Creative Scientists – Pathway to Breakthrough Ideas",
    company: "Doctoral School in Health Sciences, University of Helsinki • Autumn 2021",
    content: "The most important insight of the course was that creativity is a mindset with many different dimensions that you can practice to a large extent. I would have wanted to attend this course during normal contact teaching circumstances. Discussions over zoom often tend to be a bit cramped… But you did as good as possible given the circumstances. Your positive and cheerful attitude makes you the right person to lead this type of course (when speaking about these things came easy to you). A thing to improve – I often felt that the time for discussion in the breakout rooms was very short. Merry Christmas and thank you for a very interesting and inspiring course!",
  },
  {
    name: "E. Multamäki",
    role: "Participant course Creative Scientists – Pathway to Breakthrough Ideas",
    company: "Doctoral School in Health Sciences, University of Helsinki • Autumn 2021",
    content: "Thank you for the intensive and inspiring autumn. It was a difficult task to get us inspired through Zoom, but you did a great job there. I will definitely keep your teachings in mind and practice more creativity in the future.",
  },
  {
    name: "C. Ciocoiu",
    role: "Human Resource Manager, participant course Creative Living Abroad",
    company: "January-February 2020",
    content: "What I liked the most at this course was the good vibe of the trainer. Oana presented her course with such joy, positive energy and commitment that she managed to contaminate me every night with positive thinking and a desire to change and try new things. I will recommend this course whenever I have the opportunity and to any person, who is either in the country of origin or in a foreign country, because 'Creative living abroad' course could be actually useful for living your life.",
  },
  {
    name: "A.I. Cozma",
    role: "Program Manager at Aalto University Executive Education Ltd",
    company: "April 2019",
    content: "Dr. Oana Velcu-Laitinen was the main faculty of the Team Building and Creativity module for the UAEU Future Leaders study tour in collaboration with the UAEU University where she had as main topics: Grow awareness on how your brain reacts in social interactions, understanding others' contribution on the common goal and understanding others' perspective. I am genuinely impressed by her motivation and by how she managed to find some of our students' secret talents and encourage them to present them in front of the class. Her expertise in the topic discussed, energy and genuine kindness created a safe and relaxed learning environment where our students could freely discuss and share their experiences regarding the module's topics. Another important point I want to mention is her inquisitiveness. Dr. Oana Velcu is always eager to gather any information that would provide her a deeper understanding of her lecture subject. She received as feedback 5,89/6, and the Aalto University Executive Education team that worked on this project was delighted to have such an enthusiastic, passionate, and skilled faculty member. Dr. Oana Velcu has a deep and sincere interest in her lecture topics, and I believe she is one of the most skilled lecturers of the Team Building and Creativity module I have used in my Executive Educational Programs.",
  },
  {
    name: "M. G.-Särkkä",
    role: "Head of Development and Capital Construction",
    company: "Oy Teboil Ab • September 2018",
    content: "In September 2018 our company invited Oana to do training for a team of 30 people. The team consisted on 3 groups of managers, responsible for different areas. The main targets were: strengthen the bond between the teams; introduce basics of emotional intelligence; teach how to accept differences and how to act in different circumstances. The conducted training, from my point of view, was done very professionally, material was very well presented with many examples and active games. As a result a very positive feedback was received from the colleagues, that reflects now on our daily cooperation between the teams after the event. Can strongly recommend and will be happy to work with Oana again in the future.",
  },
  {
    name: "Lucie D.",
    role: "Participant Entrepreneurial Competence Course",
    company: "Spring 2018",
    content: "I hope we will keep contact from time to time. You are the person who lighted a small flame of entrepreneurship in my mind, and I hope I would be able to keep this fire burning until it turns into a concrete project. So thank you so much for what you did (with your skills and heart) during those wonderful workshops.",
  },
  {
    name: "Marta A.",
    role: "Participant Workshop Entrepreneurial Ideas Selection and Evaluation for Feasibility",
    company: "29th January 2018",
    content: "Oana it was a pleasure to participate in the workshop that was conducted by you. It was my first time meeting you and at first I wasn’t sure how open I can be and how much of the interaction with the participants you are expecting. Luckily you were very clear about it and you encouraged us to share our thoughts throughout the meeting. I am very impressed with your public speaking skills and the ability to present the material in interesting and inspiring way. I also loved the questions so much. Questions that described Strengths, Weaknesses, Opportunities and Threats were on spot. That was wonderful tool to help us understand what are these elements and how they are effecting us and our business. Thank you very much for all that you have done for me!",
  },
  {
    name: "Stinne F.V.",
    role: "Participant workshop New Ideas Generation",
    company: "12th December 2017",
    content: "Your workshop was absolutely awesome! I loved how relaxed and informal the environment of the workshop was, it put me in the right mood to share and really let loose and let the creativity flow! The content was super on point and there was actually time to get into the different elements of ideation and creativity. The workshop was so interactive and I loved how we started with the question in the beginning (was it about innovation or entrepreneurship?). Personally what I really took from the workshop was the part of framing and reframing questions. This was so powerful to me and definitely spoke to some of the challenges and ideas I have been stuck with at the moment and made me realised that sometimes you just need to turn everything upside down. That was so eye-opening to me!",
  },
  {
    name: "Lisa Winkler",
    role: "Participant Course Choose Your Creative Potential",
    company: "Spring 2017",
    content: "Oana structures her seminars in a lecture part, where she gives the participants new information on a part of the overall theme. Then there is time to explore through, for example, talking in the group, fun and challenging activities or pair work. Giving the participants a safe space to learn new ideas and explore own thoughts these seminars are a little oasis in the midst of our hectic life where we never seem to be allowed to cover a theme in length.",
  },
  {
    name: "Tina Quinzylline",
    role: "Participant Course Choose Your Creative Potential",
    company: "Spring 2017",
    content: "Oana, it was a really great workshop. It was an eye opening for me that we should never cease dreaming even if none came true or all possible obstacles in life are stopping us from reaching it. I’ve learned that in reality we don’t really lost our dreams we simply made a new one. I specifically enjoyed the part where we are taking turns on giving 2 stories. And we have to guess which one is real and which one is not. In my understanding, it is a subtle way of saying that everything is actually in our mind. We could come up with really nice stories put them together make them sound believable and try to make ourselves believe it happened to us. We could be whatever we wanted to be if we put our mind into it. Dreaming is a state of mind, a goal to be achieved. And success is the long process of working out our dreams which lead to our happiness. It surely won’t happened overnight. It is a long and sometimes a painful road to take. Whenever, I am free and not in Sweden I will always come to your workshops Oana. I am eager to learn more and charge myself with more good thoughts and inspiration.",
  },
  {
    name: "Yulia G.",
    role: "Project Coordinator",
    company: "Aalto University School of Science and Technology • 2016",
    content: "When we started coaching sessions with Oana, I was not quite sure what exactly to expect as I have never had such experience before. But it turned out to be a truly amazing journey and discovery of myself. The best thing about coaching is that after all you are the one to help yourself. You start going deeper and deeper to your mind with some direction from your coach who asks the right questions but in the end it is you who not only identify the cause of the problem but find a solution, in fact, many solutions. At first, it seemed impossible to me to find several solutions but once you really start analyzing your behavior patterns, you discover the connection between different thoughts, emotions and attitudes and see the ways how you can work on your goal. I came to understand many things that maybe I somehow knew before deep inside me but wasn’t really aware of and thus was not able to control. We had a perfect chemistry with Oana, I felt really at ease sharing my private thoughts and emotions from the very first meeting. I think she can feel a person very well. Oana always encouraged me and strongly supported my ideas and solutions without any judgment. I didn’t feel lonely on this way to the goal and after a session I always felt happy and charged with positive energy.",
  },
  {
    name: "Jenine E.",
    role: "Medical doctor",
    company: "2016",
    content: "Oana’s seminars are filled with well-researched studies into the different aspects of happiness – from cultivating a practice of gratitude, to learning skills of empathy and forgiveness. I especially enjoyed how she managed to include relevant information from studies while maintaining an open and creative approach, so that all participants felt free to share from their personal experiences as well. This unique blend of striking personal connection with all members of the group while still implementing a scientific approach was motivating and captivating.",
  },
  {
    name: "Curtis Wood",
    role: "Senior Researcher",
    company: "Finnish Meteorological Institute • 2016",
    content: "Some words that come to mind about Oana: wise, loving, clear, creative, thoughtful, clever, open. Aspects I liked about the sessions: good group feeling, practical things to try at home, discussions, variety of media, taking different perspectives.",
  },
  {
    name: "David Rogers",
    role: "Managing Director",
    company: "Sancom Trading • 2016",
    content: "I had the pleasure of attending Oana’s seminar series entitled “The Choice of Happiness” which was held at the Arkadia International Bookshop over several months in 2016. The seminar topics included self-compassion,empathy,generosity, gratitude,forgiveness,awe and love. One of the main conclusions for me is that happiness can be a conscious choice when the mind is conditioned to perceive the world in positive ways. It’s a little like turning a switch in one’s mind. Oana used audio-visual materials and handouts very effectively and was able to encourage active audience participation without pressuring people. This is an important skill for a seminar leader because people benefit much more from active discussions than from lectures with little or no audience participation. Many of the same people participated month after month which is a good indicator of Oana’s effectiveness as a seminar leader. Material covered during each seminar was reviewed on Oana’s Facebook page (The Choice of Happiness) and additional research references were provided. This helped to reinforce what was learned during the seminar and allowed those who could not attend an opportunity to benefit from the material. I rate this seminar and Oana’s effectiveness as a seminar leader very highly.",
  }
]

export default function TestimonialsPage() {
  return (
    <Layout hasHeroImage>
      <div>
        {/* Hero Image - Full width */}
        <div className="w-full">
          <OptimizedImage
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
                className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
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