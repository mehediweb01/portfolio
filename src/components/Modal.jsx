import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Tooltip,
} from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

function ProjectCardShow({ isOpen, onOpenChange, selectedItem }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="dark:bg-gradient-to-t dark:from-activeColor/40 dark:to-yellow-400/30"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="w-full flex justify-center items-center">
                <h1 className="text-2xl sm:text-4xl text-darkBlack dark:text-white font-inter font-semibold uppercase border-b border-header rounded-full pb-1 px-4">
                  {selectedItem.name}
                </h1>
              </ModalHeader>
              <ModalBody>
                <div className="p-4 rounded-lg shadow-md shadow-darkBlack dark:shadow-sky-600">
                  <img
                    src={selectedItem.img}
                    alt={selectedItem.name}
                    className="shadow-inner shadow-black p-2 rounded-md jump-animate"
                  />
                  <div className="flex gap-3 items-center justify-center mt-5">
                    <Tooltip content="Code" showArrow={true}>
                      <a
                        href={selectedItem.codeLink}
                        target="_blank"
                        className="shadow-inner shadow-black dark:text-white p-2 rounded-md hover:scale-95 transition-all duration-300 hover:animate-pulse"
                      >
                        <FaGithub className="text-black dark:text-white size-8" />
                      </a>
                    </Tooltip>

                    <Tooltip content="Live Preview" showArrow={true}>
                      <a
                        href={selectedItem.previewLink}
                        target="_blank"
                        className="shadow-inner shadow-black dark:text-whites p-2 rounded-md hover:scale-95 transition-all duration-300 hover:animate-pulse"
                      >
                        <BiSolidShow className="text-black dark:text-whites  size-8" />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onPress={onClose}
                  className="px-6 relative group after:content-[''] z-20 after:absolute after:bg-activeColor after:h-px after:w-full after:hover:h-[2px] transition-all after:transition-all after:duration-400 after:left-0 after:bottom-0 after:-z-20 duration-300 hover:shadow-btn shadow-activeColor after:hover:animate-spin after:animate-indeterminate-bar"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default ProjectCardShow;
