import Layout from '@/components/layout/Layout'
import HeroImage from '@/components/ui/HeroImage'
import ContentSection from '@/components/ui/ContentSection'
import Button from '@/components/ui/Button'
// import { getPageData } from '@/lib/mdx'

export default async function HomePage() {
  // const pageData = getPageData('index')

  return (
    <Layout hasHeroImage>
      <div>
        {/* Hero Section */}
        <HeroImage
          src="/images/2016/11/Oana_front_page_May2018.jpg"
          alt="Oana Velcu-Laitinen - NeuroLeadership Coach and Trainer"
          objectPosition="50% 0%"
        />

        {/* Book Highlight Section */}
        <ContentSection background="gray" className="bg-indigo-50">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to Develop Your Creative Identity at Work
              </h2>
              <blockquote className="text-lg text-gray-600 mb-6 italic">
                &ldquo;Congratulations on this important book, Oana, it was a pleasure reading it in advance – a key contribution to our field!&rdquo;
              </blockquote>
              <p className="text-base text-gray-500 mb-6">
                — Vlad Glaveanu, Full Professor of Psychology, Dublin City University
              </p>
              <Button href="/book-the-creative-identity">
                Learn More About the Book
              </Button>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center">
              <img
                className="w-full max-w-md object-cover rounded-lg shadow-lg"
                src="/images/2022/10/Velcu_Website_Book_publication_post_31Oct2022-300x169.jpg"
                alt="How to Develop Your Creative Identity at Work - Book Publication"
              />
            </div>
          </div>
        </ContentSection>

        {/* Focus on Creation and Goodness Section */}
        <div
          className="relative py-16 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(/images/hero-oana-background.jpg)'
          }}
        >
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg px-8 py-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-0">Focus on Creation and Goodness</h2>
              </div>
            </div>

            {/* Who I am */}
            <div className="mb-16 bg-white/80 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Who I am</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">Hi, I am Oana Velcu-Laitinen-Laitinen.</p>
                <p>I&rsquo;m a Helsinki based NeuroLeadership Coach. I help individuals – change makers, researchers – and their teams bring their contribution to their environment, by cultivating creative thinking and collaboration skills.</p>
              </div>
            </div>

            {/* How I can help you */}
            <div className="mb-16 bg-white/80 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How I can help you</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">For a refreshed perspective on work environments of autonomy and engagement, I can provide customised solutions in the form of:</p>
                <ul className="mb-6 space-y-2">
                  <li>Speaking events.</li>
                  <li>Corporate training.</li>
                </ul>
                <p className="mb-4">For individuals who long to strengthen their creative capacity in new professional roles:</p>
                <ul className="mb-6 space-y-2">
                  <li>Courses for career development.</li>
                </ul>
                <p>We are fulfilled when we take time to create in the areas of business, society or culture that have a special meaning to us. Let&rsquo;s talk about the initiatives you&rsquo;d like to bring about in your expert role.</p>
              </div>
            </div>

            {/* Why I do what I do */}
            <div className="mb-16 bg-white/80 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why I do what I do</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">More than 15 years ago when I conducted research on how ERP systems are implemented in Finnish companies, I could notice an underestimation of the psychology of change both among stakeholders and leadership.</p>

                <div className="my-6 pl-4 border-l-4 border-indigo-200">
                  <p className="mb-2 italic">&ldquo;How can leaders motivate their team members in the face of uncertainty?&rdquo;</p>
                  <p className="mb-2 italic">&ldquo;When faced with the unknown or the ambiguous, how can we make better use of our creative thinking to perform the core tasks?&rdquo;</p>
                  <p className="italic">&ldquo;How can people in expert roles express their concerns when it matters?&rdquo;</p>
                </div>

                <p className="mb-4">These were questions which I could not address in my doctoral dissertation. For the following years, this personal curiosity kept nagging me.</p>

                <p className="mb-4">I eventually decided to follow my intuition and disrupt my academic career for a twofold mission. First, to help leaders enable work cultures of engagement and co-creation. Second, to help individuals unleash their creativity in their chosen roles.</p>

                <p className="mb-6">Research in fields of neuroscience, – personal creativity and social interaction – , positive psychology, and organisational psychology became my candy store. As a result, for each client, I design customised training packages – online or face-to-face.</p>

                <p className="mb-8">Looking forward to working with you!</p>

                <div className="text-center">
                  <Button href="/about" variant="primaryLarge">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Some of Oana's Clients Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Some of Oana&rsquo;s Clients
              </h2>

              {/* First row */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5 items-center opacity-70 mb-8">
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2016/11/HY-Medicine-logo.png"
                    alt="University of Helsinki Medicine"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2016/11/HY-Pharmacy-logo.png"
                    alt="University of Helsinki Pharmacy"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2019/06/Aalto-EE-logo.png"
                    alt="Aalto Executive Education"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2018/10/Aalto-Ceres.png"
                    alt="Aalto CERES"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2020/08/Screenshot-2020-08-12-at-9.23.54.png"
                    alt="Client Logo"
                  />
                </div>
              </div>

              {/* Second row */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5 items-center opacity-70 mb-8">
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2018/10/Teboil.png"
                    alt="Teboil"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2020/05/logo_en.png"
                    alt="Client Logo"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2020/05/logo2_en.jpg"
                    alt="HUS"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2016/11/Specsavers-logo.png"
                    alt="Specsavers"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2016/11/Luckan-integration-logo.png"
                    alt="Luckan Integration"
                  />
                </div>
              </div>

              {/* Third row */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5 items-center opacity-70">
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2016/11/Helsingfors-Arbis-logo.png"
                    alt="Helsingfors Arbis"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-12 object-contain"
                    src="/images/2016/11/JCI-Finland-logo.png"
                    alt="JCI Finland"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIRTT Interview Quote Section */}
        <div
          className="relative py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/2022/12/Velcu_website_changemaker_interview_DIRTTinsights_Nov2022-2-300x169.jpg)'
          }}
        >
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <span className="text-8xl text-gray-300 font-serif leading-none">&ldquo;</span>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                  <a
                    href="https://www.dirtt.com/insights/changemakers-on-imagination/"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Successfully creative people manage to keep themselves open to being creative despite what happens around them. In the world of business, creativity helps us choose the problems worth our attention and provides solutions to those problems.
                  </a>
                </blockquote>

                <div className="space-y-2 text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900">Change maker on imagination.</h3>
                  <p className="text-base">The interview published by DIRTT, global leader in industrialised construction for interior spaces.</p>
                  <p className="text-sm text-gray-500">15th November 2022.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Podcast Interviews Section */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">The Digital Tour of Oana&rsquo;s Book – Podcast Interviews</h1>

            <ul className="space-y-6 text-lg text-gray-700">
              <li>April 2023 – <a href="https://podcasts.apple.com/us/podcast/how-to-improve-your-creative-brain-attract-powerful/id1558665854?i=1000609466230" className="text-indigo-600 hover:text-indigo-500">The Be Better Podcast</a>: I talk with <a href="https://www.linkedin.com/in/brandonseastman/" className="text-indigo-600 hover:text-indigo-500">Brandon Eastman</a> about how to improve your creative brain and attract powerful ideas.</li>

              <li>March 2023 – <a href="https://open.spotify.com/episode/1sizb6sKDVTn5GhY5aEVII" className="text-indigo-600 hover:text-indigo-500">Aalto University Operational Leadership Podcast</a>: Ep. 13, Operational Creativity Capacity, when I talk with Professor of Practice <a href="https://people.aalto.fi/gautam.basu" className="text-indigo-600 hover:text-indigo-500">Gautam Basu</a> about the business value of creativity in operations management.</li>

              <li>February 2023 – <a href="https://techleadjournal.dev/episodes/121/" className="text-indigo-600 hover:text-indigo-500">Tech Lead Journal:</a> Ep. #121. I talk with the host, <a href="https://www.linkedin.com/in/henry-suryawirawan/" className="text-indigo-600 hover:text-indigo-500">Henry Suryawirawan</a>, about creativity and work engagement, the creative diversity within ourselves, how to channel our curiosity, and more.</li>

              <li>January 2023 – <a href="https://speaklikealeader.show/episodes/episode-95-oana-velcu-laitinen" className="text-indigo-600 hover:text-indigo-500">Speak Like a Leader Podcast</a>: Ep. #95. I talk with the host, <a href="https://executivespeakingsuccess.com/" className="text-indigo-600 hover:text-indigo-500">John Bates</a>, Leadership Communication Expert, about the core concepts in my book – how we understand our personal creativity and how we can open ourselves to new ways of thinking about creativity for a more fulfilling professional life.</li>

              <li>November 2022 – <a href="https://soundcloud.com/user-705936595/cloud-reachers-s05e07-with-oana-velcu-laitinen" className="text-indigo-600 hover:text-indigo-500">Aalto University CloudReachers Podcast:</a> Season 5, Ep. 07. I talk with the host <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAACBz0BwdxCF7kc41qHcUXeSJnZLIjJQSU&keywords=tomi%20kauppinen&origin=RICH_QUERY_SUGGESTION&position=0&searchId=89687a4a-8808-4226-bb4e-9522206310c9&sid=Kbi" className="text-indigo-600 hover:text-indigo-500">Tomi Kauppinen</a> about identity, how to evaluate the results of creativity from the point of view of the creator and the audience, improv applied in the everyday life, our life with AI, and other interesting themes related to a creator&rsquo;s life.</li>

              <li>October 2022 – <a href="https://elenapaweta.com/episode112/" className="text-indigo-600 hover:text-indigo-500">IDEAS+LEADERS Podcast</a>: Ep. 112. I talk with the host, <a href="https://elenapaweta.com/about-me/" className="text-indigo-600 hover:text-indigo-500">Elena Paweta</a>, about the importance of creativity and how to work on it in the workplace.</li>

              <li>September 2022 – <a href="https://podcasts.apple.com/us/podcast/ep-227-developing-creativity-with-dr-oana-velcu-laitinen/id1492913444?i=1000584807240" className="text-indigo-600 hover:text-indigo-500">Teach the Geek Podcast</a>: Ep. 227. I talk with the host, <a href="https://teachthegeek.com/" className="text-indigo-600 hover:text-indigo-500">Neil Thompson</a>, about my transition from academic to self-employment, my interest in creativity and the ways I see technical professionals using their creativity in their work. Also, there&rsquo;s a <a href="https://www.youtube.com/watch?v=MQ2K4IiDnwI&t=724s" className="text-indigo-600 hover:text-indigo-500">video</a> version of the interview.</li>
            </ul>
          </div>
        </div>

        {/* COVID-19 Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">COVID-19 Edition</h1>
            <p className="text-lg text-gray-700">
              Special Coronavirus Edition. How to Maintain Your Emotional Wellbeing Through the Current Times of Uncertainty and Disruption. Watch my <a href="https://www.youtube.com/channel/UCGzpMEGbmCFxLrb9GnkTprQ?view_as=subscriber" className="text-indigo-600 hover:text-indigo-500">YouTube videos</a>.
            </p>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Past events</h1>

            <div className="space-y-8 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">11th – 12th September 2023</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4 space-y-2">
                  <p>Workshop: Creativity Kit in a Researcher&rsquo;s Life and Speaker and Discussion Panelist: Charting a Course for Success in Science – Academia versus Industry versus Entrepreneurship, <a href="https://www.helsinki.fi/en/conferences/nordic-embl-partnership-meeting-2023" className="text-indigo-600 hover:text-indigo-500">Nordic EMBL Partnership Meeting 2023</a>.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">19th July 2023</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p>Talk: How Creativity Can Become the Engine of Organisational Adaptability, <a href="https://www.possibilitystudies.net/" className="text-indigo-600 hover:text-indigo-500">Possibilities Studies Network Conference</a>, Dublin City University, Department of Psychology.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">17th July 2023</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p>Paper Presentation: Possible Pathways to Reformulating One&rsquo;s Creative Identity, <a href="https://www.possibilitystudies.net/" className="text-indigo-600 hover:text-indigo-500">Possibilities Studies Network Conference</a>, Dublin City University, Department of Psychology.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">26th March 2020</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p>Brain Health Event: <a href="https://www.facebook.com/events/625050234739449/" className="text-indigo-600 hover:text-indigo-500">Storytelling and Wellbeing</a>. Webinar hosted by <a href="https://www.facebook.com/TheScienceBasementTSB/" className="text-indigo-600 hover:text-indigo-500">The Science Basement</a>.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">8th of January 2020 <a href="https://weareepicenter.com/helsinki/singleevent/improve-your-communication-style-to-co-create-team-spirit/" className="text-indigo-600 hover:text-indigo-500">Communicate to Co-create</a></p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p>Talk hosted by Helsinki <a href="https://weareepicenter.com/helsinki/" className="text-indigo-600 hover:text-indigo-500">Epicenter</a>, The House of Digital Innovation.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Autumn 2019 <a href="/career-coaching" className="text-indigo-600 hover:text-indigo-500">Personal Growth Courses</a></p>
                <blockquote className="border-l-4 border-indigo-200 pl-4 space-y-1">
                  <p>Creative Living Abroad</p>
                  <p>Expert Competence Course</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">20th-21st March 2019 Speaking event</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p>Storytelling Day, organised by the <a href="https://www.nordiskkulturkontakt.org/en/events/" className="text-indigo-600 hover:text-indigo-500">Nordic Culture Point</a> in Helsinki.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">13th March 2019 Speaking event</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p>How to Manage Your Self-Expression for Emotional Wellbeing, at <a href="https://www.mesaatio.fi/me-talo/me-talo-espoo/" className="text-indigo-600 hover:text-indigo-500">Espoon Keskus, Me-House</a>.</p>
                </blockquote>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">16th January 2019 Speaking event</p>
                <blockquote className="border-l-4 border-indigo-200 pl-4">
                  <p><a href="https://www.facebook.com/events/506662873172343/" className="text-indigo-600 hover:text-indigo-500">Starting a Creative Industry Business</a>, co-organised by Creative Colab Helsinki and <a href="https://newcohelsinki.fi/en/" className="text-indigo-600 hover:text-indigo-500">NewCo Helsinki</a>.</p>
                </blockquote>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6"><a href="/career-coaching" className="text-indigo-600 hover:text-indigo-500">Personal development courses</a></h2>
              <div className="space-y-2 text-gray-700">
                <p>Reinvent Your Happy Self as New Mom, 6th March – 10th April 2017</p>
                <p>Choose Your Potential, 23rd March – 8th June 2017</p>
                <p><a href="/career-coaching" className="text-indigo-600 hover:text-indigo-500">Read more →</a></p>
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
    title: 'Oana Velcu-Laitinen - Creativity Skills Coach and Trainer',
    description: 'Hi, I am Oana Velcu-Laitinen-Laitinen, Helsinki Based Creativity Skills Coach and Trainer. I am interested in helping individuals nurture their creative ability and come up with initiatives that bring personal meaning and positive change in their community.',
  }
}