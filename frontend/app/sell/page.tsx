"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import React, { useState } from "react";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.6, ease: "easeIn" },
      }}
      className="mb-8"
    >
      <div className="flex justify-center flex-col gap-[40px]">
        <h3 className="text-6xl text-accent font-semibold text-center ">
          Earn from waste
        </h3>
        <p className="text-white/65 mb text-xl mb-8 text-center">
          A opportunity of increasing your profits and protecting the mother
          nature at the same time
        </p>
      </div>
      <div className="container mx-auto">
        <Tabs defaultValue="raw">
          <div className="flex flex-row gap-[5%] ">
            <form className="bg-[#27272c] rounded-lg p-10 w-[47.5%] h-[350px] ">
              <div className="grid grid-cols-2 gap-4 my-4 justify-center  ">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Contact Number" />
              </div>
              <Input
                className="w-full mb-4"
                type="address"
                placeholder="Address of pickup"
              />

              {/* options */}
              <TabsList className="flex flex-row gap-[40px] ">
                <TabsTrigger
                  value="raw"
                  className="flex items-center justify-center bg-transparent border border-accent hover:border-accent-hover"
                >
                  Leftover Raw Materail
                </TabsTrigger>
                <TabsTrigger
                  value="dead"
                  className="flex items-center justify-center bg-transparent border border-accent hover:border-accent-hover"
                >
                  Dead Stock
                </TabsTrigger>
              </TabsList>
            </form>
            {/* response to the button selected */}
            <div className="w-[47.5%]  p-10 rounded-lg bg-[#27272c]">
              <TabsContent value="raw">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4 mt-4 mb-2 justify-center  ">
                    <Input type="material" placeholder="Material" />
                    <Input type="quantity" placeholder="Weight" />
                    <Input type="price" placeholder="Price per kg" />
                  </div>
                  <div className="w-full h-[150px]"><Modal/></div>
                  <Textarea
                    className="h-[200px]"
                    placeholder="Type your message here."
                  />
                </div>
              </TabsContent>
              <TabsContent value="dead">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4 mt-4 mb-2 justify-center  ">
                    <Input type="material" placeholder="Material" />
                    <Input type="number" placeholder="Number of Pieces" />
                    <Input type="price" placeholder="Price per peice" />
                  </div>
                  <div className="w-full h-[150px]"><Modal/></div>
                  <Textarea
                    className="h-[200px]"
                    placeholder="Type your message here."
                  />
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
