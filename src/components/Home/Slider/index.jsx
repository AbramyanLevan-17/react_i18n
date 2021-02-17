import React from 'react';

import './index.scss';

const Slider = () => {

  // const profitRange = document.getElementById('profit__range').oninput = function() {
  // this.style.background = 'linear-gradient(to right, #0BA1DC 0%, #0BA1DC ' + this.value + '%, #fff ' + this.value + '%, #F0F3F6 100%)'
  const rangeChange = () => {
    const range = document.getElementById('profit__range');
    range.oninput = function () {
      this.style.background = 'linear-gradient(to right, #0BA1DC 0%, #0BA1DC ' + this.value + '%, #F0F3F6 ' + this.value + '%, #F0F3F6 100%)'
    }
  }

  return (
    <div className="range">
      <input
        onChange={rangeChange}
        type="range"
        name=""
        id="profit__range"
        className="profit__range"
        defaultValue={0}
        min={0}
        max={100}
        step={1}
      />
      <div className="range__row">
        <div className="range__min">$0</div>
        <div className="range__max">$10,000</div>
      </div>
    </div>

  )
}

export default Slider
