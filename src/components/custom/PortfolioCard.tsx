/**
 * Node modules / next
 */
import React from "react";
import Image from "next/image";

/**
 * Shadcn Components
 */
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/shadcn/card";
import { Button } from "../ui/shadcn/button";

/**
 * Lucide icons
 */
import { Eye } from "lucide-react";

/**
 * Portfolio Items Types
 */
import type { PortfolioItemsTypes } from "@/types/PortfolioPropsTypes";

export default function PortfolioCard({
  image,
  title,
  description,
  link,
}: PortfolioItemsTypes) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded"
        />
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="cursor-pointer">
              View Project <Eye />
            </Button>
          </a>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
