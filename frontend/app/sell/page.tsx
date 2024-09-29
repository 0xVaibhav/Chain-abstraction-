"use client";

import Modal from "@/components/Modal";
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
      <div className="conatiner mx-auto">
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
          <Tabs defaultValue="material" className="flex flex-row gap-6">
            <TabsList className="flex flex-col gap-6 ">
              <TabsTrigger value="material" className="w-[350px]">
                Leftover Raw Materail
              </TabsTrigger>
              <TabsTrigger value="stock" className="w-[350px]">
                Dead Stock
              </TabsTrigger>
            </TabsList>
            {/* raw material */}
            <div className="w-full h-[600px]">
              <TabsContent value="material">
                <form className="bg-[#27272c] rounded-lg p-10 flex flex-row gap-[5%]   ">
                  <div className="w-[45%]">
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

                    <div className="grid grid-cols-2 gap-4 mt-4 mb-2 justify-center  ">
                      <Input type="material" placeholder="Material" />
                      <Input type="quantity" placeholder="Weight" />
                      <Input type="price" placeholder="Price per kg" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 w-[50%]">
                    <div className="w-full ">
                      <Modal />
                    </div>
                    <Textarea
                      className="h-[200px]"
                      placeholder="Describe your product here."
                    />
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="stock">
                <form className="bg-[#27272c] rounded-lg p-10 flex flex-row gap-[5%]   ">
                  <div className="w-[45%]">
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

                    <div className="grid grid-cols-2 gap-4 mt-4 mb-2 justify-center  ">
                      <Input type="material" placeholder="Material" />
                      <Input type="quantity" placeholder="Number of Pieces" />
                      <Input type="price" placeholder="Price per Pieces" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 w-[50%]">
                    <div className="w-full ">
                      <Modal />
                    </div>
                    <Textarea
                      className="h-[200px]"
                      placeholder="Describe your product here."
                    />
                  </div>
                </form>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
