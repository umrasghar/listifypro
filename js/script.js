
  document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelector('[data-drawer-toggle="default-sidebar"]');
    const closeButton = document.querySelector('#closeButton');
    const cancelButton = document.querySelector('#cancelButton');
    const sidebar = document.querySelector('#default-sidebar');

    // Add a click event listener to the button
    openButton.addEventListener('click', function() {
        sidebar.classList.remove('translate-x-full');
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.add('translate-x-full');
    });

    cancelButton.addEventListener('click', () => {
        sidebar.classList.add('translate-x-full');
    });
  });


 