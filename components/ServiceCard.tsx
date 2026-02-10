import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon;
  className?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  Icon, 
  className,
  iconWrapperClassName,
  iconClassName,
  onClick
}) => {
  // Base container styles
  // Added cursor-pointer if onClick is present
  const baseStyle = `p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${onClick ? 'cursor-pointer active:scale-95' : ''}`;
  
  // Default styling if no className provided (White card, orange hover border)
  const containerStyle = className || "bg-white border-slate-100 hover:border-secondary/50";
  
  // Icon Wrapper Logic
  const baseIconWrapper = "w-14 h-14 rounded-lg flex items-center justify-center mb-6 border transition-colors duration-300";
  
  // If custom wrapper class is provided, use it. Otherwise use the default dynamic orange hover behavior.
  const dynamicIconWrapper = className 
    ? "bg-white border-slate-100 group-hover:bg-secondary group-hover:border-secondary" 
    : "bg-slate-50 border-slate-100 group-hover:bg-secondary group-hover:border-secondary";
    
  const finalIconWrapperClass = iconWrapperClassName 
    ? `${baseIconWrapper} ${iconWrapperClassName}`
    : `${baseIconWrapper} ${dynamicIconWrapper}`;

  // Icon Logic
  const baseIcon = "h-7 w-7 transition-colors duration-300";
  const dynamicIcon = "text-secondary group-hover:text-white";
  
  const finalIconClass = iconClassName
    ? `${baseIcon} ${iconClassName}`
    : `${baseIcon} ${dynamicIcon}`;

  return (
    <div className={`${baseStyle} ${containerStyle}`} onClick={onClick}>
      <div className={finalIconWrapperClass}>
        {Icon && <Icon className={finalIconClass} />}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-900 leading-relaxed">{description}</p>
      {onClick && (
        <p className="mt-4 text-sm font-semibold text-secondary group-hover:underline">Read More &rarr;</p>
      )}
    </div>
  );
};

export default ServiceCard;