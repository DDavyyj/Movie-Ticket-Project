import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <footer class="w-full mt-40 bg[#000000]  text-gray-300">
        <div class="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
            <div class="flex items-center space-x-3 mb-6">
                <img alt="" class="h-11"
                    src={assets.logo} />
            </div>
            <p class="text-center max-w-xl text-sm font-normal leading-relaxed">
                This project is for practice. Bigs thanks to GreatStack for project idea!!
            </p>
        </div>
        <div class="border-t border-gray-300">
            <div class="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                <a href="https://prebuiltui.com">prebuiltui</a> ©2025. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer