import React from 'react';
import { 
  SiReact, 
  SiDotnet,
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiSupabase, 
  SiOpenai, 
  SiN8N, 
  SiDocker, 
  SiVercel, 
  SiGit, 
  SiPostman,
  SiSwagger 
} from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { TbBrandCSharp, TbApi, TbBrain, TbGitBranch } from 'react-icons/tb';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ReactIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiReact size={size} {...(props as any)} />
);

export const NetCoreIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiDotnet size={size} {...(props as any)} />
);

export const OracleIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <GrOracle size={size} {...(props as any)} />
);

export const LinqIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <TbBrandCSharp size={size} {...(props as any)} />
);

export const SwaggerIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiSwagger size={size} {...(props as any)} />
);

export const NextjsIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiNextdotjs size={size} {...(props as any)} />
);

export const TypescriptIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiTypescript size={size} {...(props as any)} />
);

export const JavascriptIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiJavascript size={size} {...(props as any)} />
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiTailwindcss size={size} {...(props as any)} />
);

export const NodejsIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiNodedotjs size={size} {...(props as any)} />
);

export const ExpressIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiExpress size={size} {...(props as any)} />
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiPostgresql size={size} {...(props as any)} />
);

export const SupabaseIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiSupabase size={size} {...(props as any)} />
);

export const OpenAIIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiOpenai size={size} {...(props as any)} />
);

export const GeminiIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <TbBrain size={size} {...(props as any)} />
);

export const N8nIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiN8N size={size} {...(props as any)} />
);

export const DockerIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiDocker size={size} {...(props as any)} />
);

export const VercelIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiVercel size={size} {...(props as any)} />
);

export const GitIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiGit size={size} {...(props as any)} />
);

export const PostmanIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <SiPostman size={size} {...(props as any)} />
);

export const ApiIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <TbApi size={size} {...(props as any)} />
);

export const WorkflowIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <TbGitBranch size={size} {...(props as any)} />
);
