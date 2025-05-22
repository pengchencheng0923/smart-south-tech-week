
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EventSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "杨楠",
      title: "贵州理工学院大数据学院大数据专业负责人",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      bio: "贵州理工学院大数据学院大数据专业负责人（学院双带头人），贵州省电力大数据省级重点实验室学科带头人之一；主要研究方向为媒体大数据、智能媒体、机器学习结合信息安全等；2019年作为贵州省高层次人才引进至贵州理工学院，在大数据学院承担数据结构、机器学习、计算机视觉等课程的教学。",
      topic: "AIGC 时代企业与个人应对思考"
    },
    {
      id: 2,
      name: "赵敏敏",
      title: "深城交四川数科副总经理",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      bio: "深城交（深圳市城市交通规划设计研究中心股份有限公司）四川数科副总经理，曾就职于IBM,阿里,腾讯等一线科技企业，10年以上2B&2G商业化经验，深度参与深圳市的低空经济工作，包括低空经济规划、政策制定、产业研究、平台研发和市内的枢纽起降点基础设施一体化交付和运营，推进低空经济规划和场景设计落地工作。",
      topic: "低空经济"
    },
    {
      id: 3,
      name: "彭陈诚",
      title: "企业技术中心",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      bio: "专注于AI大模型在实际业务场景中的应用研究与实践。",
      topic: "AI 大模型在业务场景中的应用"
    },
    {
      id: 4,
      name: "陈正池",
      title: "数字化平台负责人",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      bio: "在数字化平台建设及产品运营方面拥有丰富经验，尤其在服务区数字化转型领域。",
      topic: "数字化平台及产品运营-服务区+经验分享"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">特邀嘉宾</h2>
      
      <Carousel className="w-full">
        <CarouselContent>
          {speakers.map((speaker) => (
            <CarouselItem key={speaker.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-white/5 backdrop-blur-sm border-none overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{speaker.name}</CardTitle>
                    <CardDescription className="text-gray-300">{speaker.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-blue-400 mb-2">主题: {speaker.topic}</h4>
                    <p className="text-sm text-gray-300 line-clamp-4">{speaker.bio}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
      
      <div className="mt-8 text-center">
        <p className="text-lg font-medium">期待与各位专家的精彩分享</p>
        <p className="text-sm text-gray-400 mt-2">更多嘉宾信息将持续更新</p>
      </div>
    </div>
  );
};

export default EventSpeakers;
