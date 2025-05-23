
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const EventSchedule = () => {
  const scheduleItems = [
    {
      id: 1,
      time: "9:30 - 11:00",
      title: "AIGC 时代企业与个人应对思考",
      speaker: "杨楠",
      description: "贵州理工学院大数据学院大数据专业负责人，贵州省电力大数据省级重点实验室学科带头人之一",
    },
    {
      id: 2,
      time: "11:00 - 12:00",
      title: "低空经济",
      speaker: "赵敏敏",
      description: "深城交（深圳市城市交通规划设计研究中心股份有限公司）四川数科副总经理",
    },
    {
      id: 3,
      time: "14:30 - 15:30",
      title: "AI 大模型在业务场景中的应用",
      speaker: "彭陈诚",
      description: "",
    },
    {
      id: 4,
      time: "15:30 - 16:30",
      title: "数字化平台及产品运营-服务区+经验分享",
      speaker: "陈正池",
      description: "",
    },
    {
      id: 5,
      time: "16:30 - 17:00",
      title: "交流讨论",
      speaker: "全体参会人员",
      description: "互动交流与问答环节",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">活动日程安排</h2>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        
        {scheduleItems.map((item, index) => (
          <div key={item.id} className="relative mb-8 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-blue-500 shadow-glow transform -translate-x-2 z-10"></div>
            
            <Card className={`ml-16 bg-white/5 backdrop-blur-sm border-none transition-all duration-500 hover:bg-white/10 hover:shadow-xl transform hover:translate-x-1`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="mb-2 flex items-center gap-1 bg-blue-500/20 text-blue-100 border-blue-500/30">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    第{index + 1}阶段
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">分享人:</span>
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-lg">{item.speaker}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-300 text-sm border-l-2 border-blue-500/40 pl-3 ml-1 mt-2">{item.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg mt-8 border border-blue-500/30 transform transition-all duration-300 hover:shadow-glow hover:border-blue-400/50">
        <p className="text-center text-lg">
          请参与活动人员<span className="text-pink-400 font-semibold">提前10分钟</span>入场签到，期间保持手机静音
        </p>
      </div>
    </div>
  );
};

export default EventSchedule;
