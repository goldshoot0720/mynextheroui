"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

// ✅ Updated to use Next.js `PageProps` instead of manually typing
import { PageProps } from "next";

export default function MemberPage({ params }: PageProps) {
  const name = decodeURIComponent(params.name);

  return (
    <>
      {name === "塗○傑" && (
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
              <p className="text-md">塗○傑</p>
              <p className="text-small text-default-500">董事</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>不是董事長</p>
            <p>不是總經理</p>
            <p>國中同班同學</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.tapmc.com.tw/">
              臺北農產運銷股份有限公司
            </Link>
          </CardFooter>
        </Card>
      )}
      {name === "劉○萱" && (
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
              <p className="text-md">劉○萱</p>
              <p className="text-small text-default-500">局長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>高一同班同學</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.dep.gov.taipei/">
              臺北市政府環境保護局
            </Link>
          </CardFooter>
        </Card>
      )}
      {name === "賴○蓉" && (
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
              <p className="text-md">賴○蓉</p>
              <p className="text-small text-default-500">局長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>高中同班同學</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://dof.gov.taipei/">
              臺北市政府財政局
            </Link>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
