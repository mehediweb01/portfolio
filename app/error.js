"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] gap-4">
      <h2 className="font-medium text-xl md:text-2xl tracking-[1px] font-mono">
        Something went wrong!
      </h2>

      {error.message && (
        <p className="my-2 font-medium font-inter text-gray-400">
          {error.message}
        </p>
      )}

      <Button
        variant="outline"
        size="lg"
        type="button"
        onClick={() => unstable_retry()}
        className="cursor-pointer text-xl tracking-[1px] font-mono active:scale-110 transition-all duration-300 ease-in-out"
      >
        Try again
      </Button>
    </div>
  );
}
