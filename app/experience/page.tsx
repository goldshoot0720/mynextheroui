"use client";
import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function ExperiencePage() {
  return (
    <>
      <div>
        <h1 className={title()}>經歷</h1>
      </div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">高考三級資訊處理榜首</p>
            <p className="text-small text-default-500">2025</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>管理師</p>
          <p>委任第五職等</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://sccdc.tycg.gov.tw/">
            桃園市政府智慧城鄉發展委員會
          </Link>
        </CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">臺北市長候選人</p>
            <p className="text-small text-default-500">2034</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
        <p>輔選臺北市議員有功</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://www.gov.taipei/">
            臺北市政府全球資訊網
          </Link>
        </CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">臺北市長候選人</p>
            <p className="text-small text-default-500">2038</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
        <p>黨員直選黨主席</p>
          <p>輔選臺北市議員有功</p>
          <p>輔選22縣市有功</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://www.gov.taipei/">
            臺北市政府全球資訊網
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
