import React from 'react';
import AppContext from '../AppContext';
// usage example:
// in Header.tsx:
// export default consume('contacts')(Header)
// in ContactCard.tsx:
// in ContactList ---> <ContactCard contact={c} />
// export default consume('deleteContact', 'editContact', 'viewDetails')(ContactCard)
// So, props--> contact, hocProps--> ['deleteContact', 'editContact', 'viewDetails']

export default (...hocProps: Array<string>) =>
    (OldComp: any) => (props: any) => (
        <AppContext.Consumer>
            {
                (store: any) => {
                    let newProps = { ...props };
                    hocProps.forEach(p => newProps[p] = store[p]);
                    return <OldComp {...newProps} />;
                }
            }
        </AppContext.Consumer>
    );