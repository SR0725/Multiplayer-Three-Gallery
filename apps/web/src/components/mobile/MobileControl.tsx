function MobileControl() {
  return (
    <div className='fixed bottom-2 right-2 flex flex-col gap-2 md:hidden'>
      <div id='forward' className='rounded-xl bg-white bg-opacity-50 px-4 py-2'>
        前進
      </div>
      <div
        id='backward'
        className='rounded-xl bg-white bg-opacity-50 px-4 py-2'
      >
        後退
      </div>
    </div>
  );
}

export default MobileControl;
