import { Mail, Calendar, Camera, Megaphone } from 'lucide-react';

export const contactReasons = [
  {
    icon: Calendar,
    title: 'Speaking Engagements',
    description: 'Book me for your next event or conference',
  },
  {
    icon: Camera,
    title: 'Modeling Inquiries',
    description: 'Fashion shows, campaigns, and editorial work',
  },
  {
    icon: Megaphone,
    title: 'Press & Media',
    description: 'Interview requests and media appearances',
  },
  {
    icon: Mail,
    title: 'General Inquiries',
    description: 'Questions, collaborations, and other opportunities',
  },
] as const;