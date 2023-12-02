"use client";

import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        id="tab1"
        className="tab text-base-200 h-[100px]"
        aria-label="Tab 1"
        checked={activeTab === 1}
        onChange={() => handleTabChange(1)}
      />
        <div
          role="tabpanel"
          className={`tab-content h-[60vh] w-[100vw] p-10 ${activeTab === 1 ? "active" : ""}`}
        >
          <p className="text-base-200">Next Auction 1</p>
        </div>
        
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          id="tab2"
          className="tab text-base-200 h-[100px] w-[800px]"
          aria-label="Tab 2"
          checked={activeTab === 2}
          onChange={() => handleTabChange(2)}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[60vh] w-[100vw] p-10 ${activeTab === 2 ? "active" : ""}`}
        >
          <p className="text-base-200">Next Auction 2</p>
        </div>


        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          id="tab3"
          className="tab text-base-200 h-[100px] w-[800px]"
          aria-label="Tab 3"
          checked={activeTab === 3}
          onChange={() => handleTabChange(3)}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[60vh] w-[100vw] p-10 ${activeTab === 3 ? "active" : ""}`}
        >
          <p className="text-base-200">Next Auction 3</p>
        </div>
      </div>
  );
};

export default Tabs;
