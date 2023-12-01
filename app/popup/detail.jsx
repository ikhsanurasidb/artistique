import React from 'react';
import { useModal } from '../popup/modalContext';

export const DetailProductModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <div className="h-[100%] w-[100%] relative flex justify-center items-center">
      <div className="h-[750px] w-[1000px] rounded-2xl border border-solid border-border-[#ADB4BE] bg-[#8E99AA] bg-opacity-20 backdrop-blur-lg flex justify-center items-center" >
        <div className="h-[650px] w-[900px] p-[35px] rounded-2xl bg-[#F7F7F7] flex justify-center items-center flex-col">
          <div className="h-[315px] w-[100%] flex flex-row">
            <div className="h-[315px] w-[40%]">
              <div className="h-[300px] w-[300px] bg-[#B9BFC9] rounded-2xl flex justify-center items-center">
                <div className="h-[250px] w-[250px] rounded-2xl bg-[url('../public/hero-image.jpg')] bg-cover"></div>
              </div>
            </div>
            <div className="h-[315px] w-[60%] flex-col">
              <div className="h-[157.5px] w-[100%] pt-[30px]">
                <p className="text-[36px] font-normal text-black">Patung Apa Ya Namanya</p>
                <p className="text-[24px] font-bold text-black">Rp9.999.999</p>
              </div>
              <div className="h-[157.5px] w-[100%] flex flex-col justify-end items-start pb-[30px]">
                <div className="flex flex-row gap-[20px]">
                  <div bttn blm beres className="h-[35px] w-[150px] bg-[#B9BFC9] rounded-[5px] flex justify-center items-center text-[16px] font-medium">ADD TO CART</div>
                  <div bttn blm beres className="h-[35px] w-[150px] border border-solid border-[#B9BFC9] rounded-[5px] flex justify-center items-center text-[16px] font-semibold text-[#B9BFC9]">BUY NOW</div>
                </div>
                <div className="h-[1px] w-[505px] bg-[#1A1919] relative left-[-5px] mt-[10px]"></div>
                <p className="text-[16px] font-medium text-[#1A1919] mt-[10px]">Categories : Painting</p>
                <p className="text-[16px] font-medium text-[#1A1919]">Artist : Budiawan Lstnto</p>
              </div>
            </div>
          </div>

          <div className="h-[265px] w-[100%] relative flex flex-col items-center text-[#1A1919]">
            <p className="text-[16px] font-medium mb-[5px] mt-[10px]">Description</p>
            <div className="h-[0.5px] w-[840px] bg-[#1A1919] mb-[5px]"></div>
            <p className="text-[16px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula ultrices ex, in accumsan est faucibus in. Phasellus blandit metus non suscipit volutpat.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula ultrices ex, in accumsan est faucibus in. Phasellus blandit metus non suscipit volutpat. Aliquam id ornare mi. Pellentesque eget pretium arcu. Maecenas tempus fringilla dui, sit amet porta dui egestas sit amet. Cras mattis pulvinar lectus, quis venenatis leo pellentesque vel.</p>
          </div>
        </div>
      </div>
    </div>
          </div>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};
