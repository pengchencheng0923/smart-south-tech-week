import { useEffect, useState, useRef } from "react";
import { 
  Clock, 
  MapPin, 
  User, 
  Calendar, 
  MessageCircle, 
  Users 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EventSchedule from "@/components/EventSchedule";
import EventSpeakers from "@/components/EventSpeakers";
import QRCodeSection from "@/components/QRCodeSection";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [activeTab, setActiveTab] = useState("schedule");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate days left until the event
    const eventDate = new Date('2025-05-27T09:30:00');
    
    // Update countdown every second
    const updateCountdown = () => {
      const now = new Date();
      const diffTime = eventDate.getTime() - now.getTime();
      
      if (diffTime <= 0) {
        // Event has already started
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
        return;
      }
      
      // Calculate time units
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
      
      // Calculate progress: 100% when event starts, 0% when it's a month away
      const totalDuration = 30 * 24 * 60 * 60 * 1000; // 30 days in ms
      const elapsed = totalDuration - Math.min(diffTime, totalDuration);
      const progressPercentage = Math.floor((elapsed / totalDuration) * 100);
      setProgress(progressPercentage);
    };
    
    // Call immediately and set interval
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const handleRegister = () => {
    setActiveTab("register");
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    toast.success("正在前往报名页面", {
      description: "请扫描二维码完成报名",
    });
  };

  const eventInfo = {
    title: "2025年科技活动周",
    organizer: "贵州中南交通科技有限公司",
    date: "2025年5月27日（周二）",
    time: "上午9:30",
    location: "中南交科公司1楼职工书屋",
    contactPerson: "黎涛",
    contactPhone: "17784950710",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-1 animate-pulse">
              科技创新 引领未来
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {eventInfo.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl">
              积极推动落实党中央科技创新重大决策部署，加快实现高水平科技自立自强
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/20">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span>{eventInfo.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/20">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>{eventInfo.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/20">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>{eventInfo.location}</span>
              </div>
            </div>
            
            <Button 
              onClick={handleRegister}
              variant="gradient"
              size="xl"
              className="font-semibold shadow-lg transform hover:translate-y-[-2px] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-full before:bg-white/20 before:skew-x-[45deg] hover:before:animate-shine"
            >
              立即报名参加
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] animate-shimmer"></span>
            </Button>
          </div>
          
          {/* Countdown Card */}
          <Card className="mx-auto max-w-md bg-white/10 backdrop-blur-lg border-none text-white mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <CardHeader>
              <CardTitle>距离活动开始还有</CardTitle>
              <CardDescription className="text-gray-300">活动准备就绪，期待您的参与</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-white/10 backdrop-blur-sm p-3 rounded-lg min-w-16 transform transition-all duration-500 hover:shadow-glow hover:bg-white/20">{countdown.days}</div>
                  <div className="text-xs text-gray-300 mt-1">天</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-white/10 backdrop-blur-sm p-3 rounded-lg min-w-16 transform transition-all duration-500 hover:shadow-glow hover:bg-white/20">{countdown.hours}</div>
                  <div className="text-xs text-gray-300 mt-1">小时</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-white/10 backdrop-blur-sm p-3 rounded-lg min-w-16 transform transition-all duration-500 hover:shadow-glow hover:bg-white/20">{countdown.minutes}</div>
                  <div className="text-xs text-gray-300 mt-1">分钟</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-white/10 backdrop-blur-sm p-3 rounded-lg min-w-16 transform transition-all duration-500 hover:shadow-glow hover:bg-white/20">{countdown.seconds}</div>
                  <div className="text-xs text-gray-300 mt-1">秒</div>
                </div>
              </div>
              <Progress value={progress} className="h-3 bg-gray-700" />
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Content Tabs */}
      <div ref={tabsRef} className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-20 text-xl">
            <TabsTrigger value="schedule" className="text-xl font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/50 data-[state=active]:to-purple-600/50">
              活动日程
            </TabsTrigger>
            <TabsTrigger value="speakers" className="text-xl font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/50 data-[state=active]:to-purple-600/50">
              特邀嘉宾
            </TabsTrigger>
            <TabsTrigger value="register" className="text-xl font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/50 data-[state=active]:to-purple-600/50">
              报名参加
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule" className="bg-white/5 backdrop-blur-md rounded-lg p-6 animate-fade-in">
            <EventSchedule />
          </TabsContent>
          
          <TabsContent value="speakers" className="bg-white/5 backdrop-blur-md rounded-lg p-6 animate-fade-in">
            <EventSpeakers />
          </TabsContent>
          
          <TabsContent value="register" className="bg-white/5 backdrop-blur-md rounded-lg p-6 animate-fade-in">
            <QRCodeSection contactPerson={eventInfo.contactPerson} contactPhone={eventInfo.contactPhone} />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Footer */}
      <footer className="bg-indigo-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">{eventInfo.organizer}</h3>
              <p className="text-gray-400">企业技术中心（数智交通研究院）</p>
            </div>
            <div className="flex items-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <User className="h-5 w-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>联系人: {eventInfo.contactPerson}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>联系电话: {eventInfo.contactPhone}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <Users className="h-5 w-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>各部门及子公司参与</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <Separator className="my-4 bg-white/20" />
          <p className="text-center text-gray-400">© 2025 贵州中南交通科技有限公司. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
