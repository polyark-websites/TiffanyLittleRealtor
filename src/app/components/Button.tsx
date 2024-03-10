'use client'

import { ArrowRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

export interface ButtonProps {
    text: string,
    className?: string,
    invert: boolean,
    onClick?: () => void
}

export default function Button( { text, className, invert, onClick } : ButtonProps) {
    const bgColor = invert ? 'bg-white' : 'bg-primary-dark';
    const textColor = invert ? 'text-primary-dark' : 'text-white';
    const strokeColor = invert ? 'stroke-primary-dark' : 'stroke-white';
    const buttonHover = invert ? "hover:bg-primary-dark hover:text-white" : "hover:bg-primary-light";
    const arrowHover = invert ? "group-hover:stroke-primary-light" : "group-hover:stroke-primary-dark";
    const joinedClassName = `rounded ${bgColor} font-semibold ${textColor} ${buttonHover} shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark w-1/2 uppercase ${className}`
  return (
    <button
    type="button"
    className={joinedClassName}
    onClick={onClick}
  >
    <div className="flex items-center justify-center">
        <p className="uppercase">{text}</p> 
        <ArrowRightIcon className={`h-4 w-5 ml-2 ${arrowHover}`}/>
    </div>
  </button>
  )
}
