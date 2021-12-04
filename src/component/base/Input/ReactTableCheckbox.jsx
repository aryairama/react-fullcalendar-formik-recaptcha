import React from 'react';

const ReactTableCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input type="checkbox" ref={resolvedRef} {...rest} />
      <label htmlFor={rest.id}>{rest.label}</label>
    </div>
  );
});

export default ReactTableCheckbox;
