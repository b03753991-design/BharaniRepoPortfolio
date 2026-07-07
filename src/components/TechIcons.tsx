import React from 'react';
import { SiReact, SiDotnet, SiPostgresql, SiNodedotjs, SiExpress, SiPostman, SiSwagger } from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { TbBrandCSharp, TbApi } from 'react-icons/tb';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// React Icon using official SimpleIcons
export const ReactIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiReact size={size} {...(props as any)} />
);

// ASP.NET / .NET Core Icon using official SimpleIcons
export const NetCoreIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiDotnet size={size} {...(props as any)} />
);

// PostgreSQL Icon using official SimpleIcons
export const PostgresIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiPostgresql size={size} {...(props as any)} />
);

// Oracle Icon using official Grommet Icons
export const OracleIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <GrOracle size={size} {...(props as any)} />
);

// C# Icon using official Tabler Icons
export const LinqIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <TbBrandCSharp size={size} {...(props as any)} />
);

// Node.js Icon using official SimpleIcons
export const NodejsIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiNodedotjs size={size} {...(props as any)} />
);

// Express.js Icon using official SimpleIcons
export const ExpressIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiExpress size={size} {...(props as any)} />
);

// Postman Icon using official SimpleIcons
export const PostmanIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiPostman size={size} {...(props as any)} />
);

// Swagger Icon using official SimpleIcons
export const SwaggerIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiSwagger size={size} {...(props as any)} />
);

// API Icon using official Tabler Icons
export const ApiIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <TbApi size={size} {...(props as any)} />
);
