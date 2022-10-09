export const iconControls = () => {
  return `
  <div class='flex flex-col' id="iconControls">
    <label>
        size:
        <input
            type="range"
            id="icon-size-slider"
            value="20"
            max="40"
            class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
        />
        </label>
        <div class="flex space-x-6">
        <label
            >Top:
            <input
            type="range"
            id="icon-top-slider"
            value="20"
            max="100"
            class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
            />
        </label>
        <label
            >Right:
            <input
            type="range"
            id="icon-right-slider"
            value="20"
            max="100"
            class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
            />
        </label>
    </div>`;
};

export const labelControls = () => {
  return `
  <div class='flex flex-col' id="labelControls">
  <label>
      Font:
      <input
        type="range"
        id="font-slider"
        value="20"
        max="40"
        class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
      />
    </label>
    <div class="flex space-x-6">
      <label
        >Top:
        <input
          type="range"
          id="top-slider"
          value="20"
          max="100"
          class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
        />
      </label>
      <label
        >Right:
        <input
          type="range"
          id="right-slider"
          value="20"
          max="100"
          class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
        />
      </label>
    </div>`;
};
