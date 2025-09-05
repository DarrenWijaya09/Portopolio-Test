"use client"; 
// Memberitahu Next.js (jika dipakai) bahwa komponen ini harus dirender di sisi client, 
// karena menggunakan hook seperti useState, useEffect, dan framer-motion.

import { useScroll, useTransform, motion } from "framer-motion"; 
// Import hooks dan komponen animasi dari framer-motion:
// - useScroll: membaca posisi scroll dari target
// - useTransform: mengubah nilai animasi berdasarkan nilai lain (misalnya scroll)
// - motion: digunakan untuk membuat elemen HTML punya animasi

import React, { useEffect, useRef, useState } from "react";
// Import hook React untuk state dan ref:
// - useRef: membuat reference ke elemen HTML
// - useState: membuat variabel state
// - useEffect: menjalankan efek setelah render

// Komponen utama Timeline, menerima props "data" (array pengalaman kerja)
export const Timeline = ({ data }) => {
  const ref = useRef(null);          // Ref untuk mengukur tinggi seluruh timeline
  const containerRef = useRef(null); // Ref untuk container, digunakan sebagai target scroll
  const [height, setHeight] = useState(0); // State untuk menyimpan tinggi elemen

  // useEffect akan berjalan setelah komponen dirender
  useEffect(() => {
    if (ref.current) {
      // Ambil ukuran elemen ref
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height); // Simpan tinggi elemen ke state
    }
  }, [ref]); // Dependency array: hanya dijalankan ulang jika "ref" berubah

  // Mengambil progress scroll (0 - 1) dari containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,       // Elemen yang dijadikan patokan scroll
    offset: ["start 10%", "end 50%"], 
    // "start 10%" = animasi mulai ketika 10% container terlihat
    // "end 50%"   = animasi selesai ketika 50% container terlihat
  });

  // Mengubah nilai scroll menjadi tinggi animasi garis
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  // Mengubah nilai scroll menjadi opacity (transparansi) untuk animasi garis
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      {/* Judul Section */}
      <h2 className="text-heading">My Work Experience</h2>

      {/* Wrapper untuk semua item timeline */}
      <div ref={ref} className="relative pb-20">
        {/* Loop setiap item data */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Bagian kiri: tanggal & jabatan */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              {/* Titik di timeline */}
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              {/* Teks tanggal & title (tampil di layar besar) */}
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            {/* Bagian kanan: deskripsi konten */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {/* Tanggal & job (tampil di layar kecil) */}
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {/* Loop setiap isi dari "contents" */}
              {item.contents.map((content, index) => (
                <p className="mb-3 font-normal text-neutral-400" key={index}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Garis timeline (background abu-abu) */}
        <div
          style={{
            height: height + "px", // tinggi sesuai tinggi semua item
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
          from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Garis berwarna ungu yang bergerak mengikuti scroll */}
          <motion.div
            style={{
              height: heightTransform,  // tinggi berubah sesuai scroll
              opacity: opacityTransform // opacity berubah sesuai scroll
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
