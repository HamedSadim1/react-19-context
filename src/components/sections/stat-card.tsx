import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { LucideIcon } from "lucide-react";

export type StatCardData = {
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
  gradient: string;
  iconColor: string;
};

export function StatCard({ stat }: { stat: StatCardData }) {
  return (
    <Card
      variant="glass"
      className="group relative overflow-hidden hover:-translate-y-1"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <CardHeader className="relative">
        <div
          className={`bg-background mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconColor}`}
        >
          <stat.icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">{stat.value}</CardTitle>
        <CardDescription>{stat.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative pt-0">
        <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
          {stat.label}
        </span>
      </CardContent>
    </Card>
  );
}
