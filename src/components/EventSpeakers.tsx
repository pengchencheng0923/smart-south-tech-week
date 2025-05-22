
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EventSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "杨楠",
      title: "贵州理工学院大数据学院大数据专业负责人",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // Tech code visualization
      bio: "贵州理工学院大数据学院大数据专业负责人（学院双带头人），贵州省电力大数据省级重点实验室学科带头人之一；主要研究方向为媒体大数据、智能媒体、机器学习结合信息安全等；2019年作为贵州省高层次人才引进至贵州理工学院，在大数据学院承担数据结构、机器学习、计算机视觉等课程的教学。",
      topic: "AIGC 时代企业与个人应对思考"
    },
    {
      id: 2,
      name: "赵敏敏",
      title: "深城交四川数科副总经理",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1", // Tech laptop display
      bio: "深城交（深圳市城市交通规划设计研究中心股份有限公司）四川数科副总经理，曾就职于IBM,阿里,腾讯等一线科技企业，10年以上2B&2G商业化经验，深度参与深圳市的低空经济工作，包括低空经济规划、政策制定、产业研究、平台研发和市内的枢纽起降点基础设施一体化交付和运营，推进低空经济规划和场景设计落地工作。",
      topic: "低空经济"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">特邀嘉宾</h2>
      
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {speakers.map((speaker) => (
              <CarouselItem key={speaker.id}>
                <SpeakerCard speaker={speaker} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static transform-none bg-white/10 hover:bg-white/20" />
            <CarouselNext className="relative static transform-none bg-white/10 hover:bg-white/20" />
          </div>
        </Carousel>
      </div>
      
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg font-medium">期待与各位专家的精彩分享</p>
        <p className="text-sm text-gray-400 mt-2">更多嘉宾信息将持续更新</p>
      </div>
    </div>
  );
};

interface SpeakerProps {
  speaker: {
    id: number;
    name: string;
    title: string;
    image: string;
    bio: string;
    topic: string;
  }
}

const SpeakerCard: React.FC<SpeakerProps> = ({ speaker }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-none overflow-hidden h-full transition-all duration-500 hover:bg-white/10 hover:shadow-lg transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={speaker.image} 
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
            特邀嘉宾
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-2xl">{speaker.name}</CardTitle>
        <CardDescription className="text-gray-300">{speaker.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-medium text-blue-400 mb-2 flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          主题: {speaker.topic}
        </h4>
        <p className="text-sm text-gray-300 line-clamp-4 hover:line-clamp-none transition-all duration-300">{speaker.bio}</p>
      </CardContent>
    </Card>
  );
};

export default EventSpeakers;
