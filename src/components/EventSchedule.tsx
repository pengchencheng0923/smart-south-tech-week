
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
      <h2 className="text-2xl font-bold mb-6">活动日程安排</h2>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        
        {scheduleItems.map((item, index) => (
          <div key={item.id} className="relative mb-8 last:mb-0">
            <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-blue-500 shadow-glow transform -translate-x-2 z-10"></div>
            
            <Card className={`ml-16 bg-white/5 backdrop-blur-sm border-none transition-all duration-500 hover:bg-white/10 hover:shadow-xl`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">
                    {item.time}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
                    第{index + 1}阶段
                  </Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">分享人:</span>
                    <span className="font-semibold">{item.speaker}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg mt-8">
        <p className="text-center text-sm">
          请参与活动人员提前10分钟入场签到，期间保持手机静音
        </p>
      </div>
    </div>
  );
};

export default EventSchedule;
