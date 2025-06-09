import OptimizedImage from '@/components/ui/OptimizedImage'
import Layout from '@/components/layout/Layout'
import HeroImage from '@/components/ui/HeroImage'

export default async function CareerCoachingPage() {

  return (
    <Layout hasHeroImage>
      <div>
        {/* Hero Image */}
        <HeroImage
          src="/images/hero-oana-speaking.jpg"
          alt="Oana Velcu-Laitinen - Career Coaching"
          objectPosition="50% 25%"
        />

        {/* Intro Quote Section */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <blockquote className="text-lg text-gray-600 italic">
                &ldquo;Find something more important than you are, and dedicate your life to it.&rdquo;, philosopher Dan Dennet said when discussing the secret to happiness in a TED Talk.
              </blockquote>
            </div>
          </div>
        </div>

        {/* Career Development Courses Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Career Development Courses</h1>
              <p className="text-lg text-gray-600 mb-6">For individuals who are in one of the following two life situations:</p>
              <ol className="text-left max-w-2xl mx-auto list-decimal list-inside space-y-2 text-gray-600 mb-8">
                <li>Seeking career upgrade.</li>
                <li>Recently moved to a new country and in need of reinventing their professional purpose.</li>
              </ol>
              <p className="text-lg text-gray-600 mb-8">
                The courses offer a science-based framework which orients the participants towards clarifying their thinking, awakening their interests and taking action.
              </p>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-wide"
              >
                Contact Me
              </a>
            </div>

            {/* Present Courses */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Present Courses</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Expert Competence Course */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Competence Course</h3>
                  <div className="flex justify-center mb-6">
                    <OptimizedImage
                      src="/images/2022/07/Autumn2022_ExpertCompetence_Course_Arbis-212x300.png"
                      alt="Expert Competence Course"
                      className="w-64 h-auto rounded-lg shadow-sm"
                      width={212}
                      height={300}
                    />
                  </div>
                  <p className="text-gray-600 text-center">
                    For further inquiry, please reach out <a href="/about" className="text-indigo-600 hover:text-indigo-500">here</a>.
                  </p>
                </div>

                {/* Creative Living Abroad */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative Living Abroad</h3>
                  <div className="flex justify-center mb-6">
                    <OptimizedImage
                      src="/images/2022/07/2022_CreativeLivingAbroad_Arbis-212x300.png"
                      alt="Creative Living Abroad Course"
                      className="w-64 h-auto rounded-lg shadow-sm"
                      width={212}
                      height={300}
                    />
                  </div>
                  <p className="text-gray-600 text-center">
                    For further inquiry, please reach out <a href="/about" className="text-indigo-600 hover:text-indigo-500">here</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What former participants are saying</h2>

              {/* Competence Course Testimonials */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Competence Course</h3>

                <div className="space-y-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">H. Johansson</h4>
                    <blockquote className="text-gray-600 italic">
                      &ldquo;Do you remember that I asked you the first class if I should apply to a dream job even if I don&rsquo;t fulfil all the requirements. Well, I did, and even if I did not get that precise job it got me very much further in many ways. I started getting much more freelance jobs from this employer, and it seems like we will co-operate much closer than ever before. So it really pays off to apply even though you would not be completely qualified for a certain job. Thank you again for a thought-provoking and inspiring class.&rdquo;
                    </blockquote>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">M. Majuri</h4>
                    <blockquote className="text-gray-600 italic">
                      &ldquo;The group discussions, discussions in pairs and the online tests. All of these gave good insight to my personal situation, and to my strengths and weaknesses. The course did not throw &lsquo;the grand revelation&rsquo; at my face, but it really helped. During the course I started to get some confirmation of the direction I want to take, at least for now. Just for your information, my boss asked me about 10 months ago what I would like to do professionally in an ideal situation &ndash; at the time I did not have an answer for him. Already during the course I could now give him an answer. One thing led to another and now I have a new title in that area &ndash; just a title, but it&rsquo;s a start. Whether this is something I really want to do in the future is questionable, but like discussed in the course, it&rsquo;s worth exploring, right?&rdquo;
                    </blockquote>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">D. Porumboiu</h4>
                    <blockquote className="text-gray-600 italic">
                      &ldquo;I liked that I dived deeper into problems I didn&rsquo;t realise I had and that I had that chance to think of myself once a week. I got curious about rediscovering myself and where to go professionally.&rdquo;
                    </blockquote>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">K. Huhta</h4>
                    <blockquote className="text-gray-600 italic">
                      &ldquo;I just needed to get out of my current situation, I just didn&rsquo;t see how. For me, the big idea came during and because of this course. In that sense, it changed my life. Thank you.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Creative Living Abroad Testimonials */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Creative Living Abroad</h3>

                <div className="space-y-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">N. Aleksandrova</h4>
                    <blockquote className="text-gray-600 italic">
                      &ldquo;It was incredible relief to have put into words the feelings I have been feeling all those years living here as a foreigner that are too hard to put into words for other people. And it all being presented in such a clear and structured way with scientific backing and explanations. Also, Oana&rsquo;s naturally positive character and enthusiasm, genuine care and compassion provided a gem of a space for expressing those feelings, sharing with others, and also generating ideas for transforming one&rsquo;s experience through positivity and creativity. The benefit is that in some way it was almost a healing process of some hardships of being a foreigner. Also, gaining interesting tools for transforming attitude, tools for further transformation.&rdquo;
                    </blockquote>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">H. Marstrander</h4>
                    <blockquote className="text-gray-600 italic">
                      &ldquo;Wonderful group leader, new insights and interesting perspectives.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Archives */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Courses Archive March – June 2017</h2>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Creative Potential</h3>
                  <p className="text-gray-600 mb-4">
                    Anyone interested in unleashing the creative potential in his/her life in order to gain insights into particular areas of life, to see this area of life like he/she has never seen it before.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Are you an explorer at heart? Are you curious about knowing what you can actually create in this life-time? Or being more aware about how you can enjoy your life in a more creative way?
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Where:</strong> Arabiankatu 6 C, Helsinki.<br />
                    <strong>When:</strong> Thursday, 23rd March, 6th April, 27th April, 11th May
                  </p>
                  <a href="https://www.facebook.com/events/1261359477253658/" target="_blank" rel="noopener" className="text-indigo-600 hover:text-indigo-500">
                    Read more →
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Courses Archive February – October 2016</h2>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Choice of Happiness</h3>
                  <p className="text-gray-600 mb-4">
                    The course consisted of 8 seminars, in which we covered topics such as awareness, self-compassion, empathy, generosity, awe, gratitude, love and forgiveness. These topics were tackled from both a spiritual and positive psychology standpoint. Each seminar took about one hour, by the end of which, the participants were endowed with a set of techniques to cultivate their happiness.
                  </p>
                  <a href="http://www.arkadiabookshop.fi/wednesday-10-2-at-5-pm-at-arkadia-beginning-of-the-choice-of-happiness-a-course-by-oana-velcu-laitinen/" target="_blank" rel="noopener" className="text-indigo-600 hover:text-indigo-500">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function generateMetadata() {
  return {
    title: 'Career Development Courses | Oana Velcu-Laitinen',
    description: 'Career development courses for individuals seeking career upgrade or recently moved to a new country. Science-based framework for clarifying thinking and taking action.',
  }
}