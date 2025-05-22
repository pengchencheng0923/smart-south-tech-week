
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { Copy, CheckCircle2 } from "lucide-react";

interface QRCodeSectionProps {
  contactPerson: string;
  contactPhone: string;
}

const QRCodeSection: React.FC<QRCodeSectionProps> = ({ contactPerson, contactPhone }) => {
  const [copied, setCopied] = React.useState(false);

  const copyContactInfo = () => {
    const info = `联系人: ${contactPerson}, 电话: ${contactPhone}`;
    navigator.clipboard.writeText(info);
    setCopied(true);
    toast.success("联系信息已复制到剪贴板");
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">报名参加</h2>
        <div className="space-y-4">
          <p className="text-lg">请各部门、司属各单位于<span className="text-pink-400 font-semibold">5月26日15:00前</span>在综管中南π中进行报名或直接扫描二维码进行报名。</p>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-500/30 transform transition-all duration-300 hover:shadow-glow hover:border-blue-400/50">
            <h3 className="font-medium mb-2">参会人员要求:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-blue-200">企业技术中心全体人员</li>
              <li className="text-blue-200">各子公司至少5名同志参加</li>
              <li className="text-blue-200">各部门至少1名同志参加</li>
            </ul>
          </div>
          
          <div className="pt-4">
            <h3 className="font-medium mb-4 text-lg">联系方式:</h3>
            <div className="space-y-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-500/20 text-blue-100 border-blue-500/30">联系人</Badge>
                <span className="text-blue-100">{contactPerson}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-500/20 text-blue-100 border-blue-500/30">联系电话</Badge>
                <span className="text-blue-100">{contactPhone}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2 text-xs flex gap-1 items-center text-blue-200 hover:text-blue-100"
                  onClick={copyContactInfo}
                >
                  {copied ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copied ? "已复制" : "复制"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="bg-white/5 backdrop-blur-sm border-none overflow-hidden h-full transform transition-all duration-500 hover:shadow-xl hover:bg-white/10 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">扫描二维码报名</CardTitle>
          <CardDescription>请在截止日期前完成报名</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-8">
          <div className="relative w-64 h-64 bg-white p-4 rounded-lg transform transition-all duration-500 hover:shadow-glow">
            {/* QR Code with the provided image */}
            <img 
              src="/lovable-uploads/9a2bacf8-c11a-44a2-a1b1-0d06d327aaab.png" 
              alt="活动报名二维码"
              className="w-full h-full object-contain"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              扫码报名
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center text-sm">
          <div className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full">
            截止日期: <span className="font-semibold">2025年5月26日 15:00</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QRCodeSection;
