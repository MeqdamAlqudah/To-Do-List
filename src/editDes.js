const edit = ({ input, element }) => {
  input.addEventListener('change', () => {
    element.description = input.value;
  });
  input.value = element.description;
};

export default edit;