// app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  Clock,
  Heart,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '../components/ui/button'
const team = [
  {
    name: "Sarah Williams",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
    bio: "With 15 years in interior design, Sarah brings passion to every product."
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    bio: "Award-winning designer focused on creating timeless pieces."
  },
  {
    name: "Emma Rodriguez",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=60",
    bio: "Dedicated to ensuring every customer has an exceptional experience."
  },
  {
    name: "James Wilson",
    role: "Production Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    bio: "Oversees quality control and sustainable manufacturing processes."
  }
]

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Excellence",
    description: "We never compromise on quality or craftsmanship."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "Driven by love for design and customer satisfaction."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Sustainability",
    description: "Ethical sourcing and eco-friendly practices."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community",
    description: "Building relationships with artisans and customers."
  }
]

const milestones = [
  { year: "2015", title: "Founded", description: "Started in a small workshop" },
  { year: "2017", title: "First Showroom", description: "Opened flagship store in NYC" },
  { year: "2019", title: "Online Launch", description: "Expanded to e-commerce" },
  { year: "2021", title: "International", description: "Shipping to 50+ countries" },
  { year: "2023", title: "Award", description: "Best Home Decor Brand" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449247709967-446a63c6f8d9?w=1600&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Our Story
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Crafting timeless pieces for modern living since 2015
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">
                Redefining Home Living
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2015, we started with a simple mission: to bring 
                beautifully designed, high-quality home furnishings to everyone. 
                What began as a small workshop has grown into a global brand, 
                but our commitment to craftsmanship remains unchanged.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Each piece in our collection is thoughtfully designed to blend 
                timeless elegance with modern functionality, creating spaces that 
                inspire and comfort.
              </p>
              <Button size="lg" className="rounded-full px-8">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&auto=format&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Workshop"
                    />
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Craftsmanship"
                    />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Materials"
                    />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Showroom"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate individuals dedicated to excellence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">Milestones that shaped our story</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 md:px-12 mb-6 md:mb-0">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="text-3xl font-serif font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative md:w-1/2 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Join Our Story
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of our journey to create beautiful homes around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 rounded-full text-lg"
            >
              Shop Collection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}