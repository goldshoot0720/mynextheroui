import React, { useState, useEffect } from 'react';  // Add this import

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

// Define the type for the props, where params will be passed as a promise
type MemberPageProps = {
  params: Promise<{
    name: string;
  }>;
};

// You can adjust the type of `params` to match Next.js PageProps
export default function MemberPage({ params }: MemberPageProps) {
  // Resolve the promise for params
  const [resolvedParams, setResolvedParams] = useState<{ name: string } | null>(null);

  useEffect(() => {
    params.then(resolved => {
      setResolvedParams(resolved);
    });
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const name = decodeURIComponent(resolvedParams.name);

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
