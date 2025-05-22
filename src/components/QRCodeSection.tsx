
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";

interface QRCodeSectionProps {
  contactPerson: string;
  contactPhone: string;
}

const QRCodeSection: React.FC<QRCodeSectionProps> = ({ contactPerson, contactPhone }) => {
  const copyContactInfo = () => {
    const info = `联系人: ${contactPerson}, 电话: ${contactPhone}`;
    navigator.clipboard.writeText(info);
    toast.success("联系信息已复制到剪贴板");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">报名参加</h2>
        <div className="space-y-4">
          <p>请各部门、司属各单位于5月26日15:00前在综管中南π中进行报名或直接扫描二维码进行报名。</p>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
            <h3 className="font-medium mb-2">参会人员要求:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>企业技术中心全体人员</li>
              <li>各子公司至少5名同志参加</li>
              <li>各部门至少1名同志参加</li>
            </ul>
          </div>
          
          <div className="pt-4">
            <h3 className="font-medium mb-2">联系方式:</h3>
            <div className="flex items-center gap-2">
              <Badge>联系人</Badge>
              <span>{contactPerson}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge>联系电话</Badge>
              <span>{contactPhone}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-2 text-xs"
                onClick={copyContactInfo}
              >
                复制
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="bg-white/5 backdrop-blur-sm border-none overflow-hidden h-full">
        <CardHeader>
          <CardTitle>扫描二维码报名</CardTitle>
          <CardDescription>请在截止日期前完成报名</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="relative w-64 h-64 bg-white p-4 rounded-lg">
            {/* Placeholder QR Code - will be replaced later */}
            <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <p className="text-gray-500 text-sm">二维码占位图</p>
                <p className="text-gray-400 text-xs mt-2">实际二维码将在后续更换</p>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
              扫码报名
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-300">
          <p>截止日期: 2025年5月26日 15:00</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QRCodeSection;
