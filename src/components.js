export const iconControls = () => {
  return `
  <div class='flex flex-col hidden' id="iconControls">
    <p class='mb-1 bg-gray-700 text-gray-900 rounded-xl p-2''>Icon</p>
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
            >top:
            <input
            type="range"
            id="icon-top-slider"
            value="20"
            max="100"
            class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
            />
        </label>
        <label
            >right:
            <input
            type="range"
            id="icon-right-slider"
            value="20"
            max="100"
            class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
            />
        </label>
    </div>
    </div>`;
};

export const labelControls = () => {
  return `
  <div class='flex flex-col ' id="labelControls">
  <p class='mb-1 bg-gray-700 text-gray-900 rounded-xl p-2'>Text</p>
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
    
      </div>
      <p class='mb-2 bg-gray-700 text-gray-900 rounded-xl p-2''>Align</p>
      <div class='text-gray-900'>
      <input type='button' value='left' class='bg-gray-400 p-3 rounded-xl'/>
      <input type='button' value='center'  class='bg-gray-400 p-3 rounded-xl'/>
      <input type='button' value='right'  class='bg-gray-400 p-3 rounded-xl'/>

      </div>
    </div>`;
};
