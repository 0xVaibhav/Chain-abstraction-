"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="   "
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
            <form className="bg-[#27272c] rounded-lg p-10 w-[47.5%]  ">
              <div className="grid grid-cols-2 gap-4 my-4 justify-center  ">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="address" placeholder="Address of pickup" />
              </div>

              {/* options */}
              <TabsList className="flex flex-row gap-[40px] ">
                <TabsTrigger
                  value="raw"
                  className="flex items-center justify-center bg-transparent border border-accent hover:border-accent-hover"
                >
                  Raw Materail
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
            <div className="max-h-[47.5%]">
              <TabsContent value="raw">raw</TabsContent>
              <TabsContent value="dead">dead</TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
