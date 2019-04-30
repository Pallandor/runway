## Roger - Shoulder Check Test Implementation

```js
<div>
  <PopupField
    placeHolder="Where to?"
    buttonLabel="Where"
    Icon={PersonIcon}
    HeaderIcon={PersonIcon}
    headerLabel="Passengers"
    dialogDimensions={{ height: '220px', width: '320px' }}
  >
    <div>Content of the popup</div>
  </PopupField>
  <MediaQueryDetector query="@media only screen and (min-width: 480px)">
    {atLeastTablet => (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <PopupField
            placeHolder="Where to?"
            buttonLabel="Where"
            Icon={PersonIcon}
            HeaderIcon={PersonIcon}
            headerLabel="Passengers"
            disableHeader={atLeastTablet}
            disableFooter={false}
            dialogDimensions={{ height: '522px', width: '375px' }}
            iconLabelButtonValue={{
              icon: PersonIcon,
              label: '12 Passengers'
            }}
            footerLabelsPrimary={["1 Adult, 1 Children, more moremor", "4 Youths, 3 Infants, 2 oroenorn"]}
            footerLabelPrimaryAriaTitle="Passengers Summary prior to Confirmation"
            footerActionText="Confirm"
            onFooterAction={close => {
              console.log('did it blend?');
              close();
            }}
            preFooter={
              <InfoSection
                width="100%"
                content={
                  <span tabIndex={0}>
                    Book children under 2 years as infants. Find out more about
                    <a href="https://www.qantas.com/au/en/travel-info/children/parent-info.html">
                      {' '}
                      travelling with infants
                    </a>
                  </span>
                }
              />
            }
          >
            <div>
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} style={{ 
                    // padding: '17px 0px 0px 0px',
                    ...((idx !== 0) && {
                      padding: '17px 0px 0px 0px'
                    })
                  }}>
                    <StatefulManager initial={4}>
                      {({ value, updater }) => {
                        const buildValidationProps = value => {
                          const messageNode = (
                            <span>
                              Only 1 Infant can be booked for every 1 Adult
                              online, please see{' '}
                              <a
                                style={{
                                  // color: '#e40000', // already in q.css
                                  // textDecoration: 'none' // already in q.css
                                }}
                                href="https://www.qantas.com/au/en/travel-info/children/parent-info.html"
                              >
                                {' '}
                                Information for parents
                              </a>
                            </span>
                          );
                          return value === 3 || value === 6
                            ? {
                                isInvalid: true,
                                isInvalidMessage: messageNode
                              }
                            : {};
                        };
                        return (
                          <NumericInput
                            label="Children (2-11 yrs)"
                            id={`someIdVersion${idx}`}
                            min={0}
                            max={6}
                            onChange={updater}
                            value={value}
                            {...buildValidationProps(value)}
                          />
                        );
                      }}
                    </StatefulManager>
                  </div>
                ))}
            </div>
          </PopupField>
        </div>
      </div>
    )}
  </MediaQueryDetector>
</div>
```

### Value not selected

Optional placeholder and icon will be displayed if provided

```js
<PopupField
  placeHolder="Where to?"
  buttonLabel="Where"
  Icon={PinIcon}
  HeaderIcon={PinIcon}
  headerLabel="Popup Field"
>
  <div>Content of the popup</div>
</PopupField>
```

### Value Selected

Optional labels `largeButtonValue` and/or `smallButtonValue` will be displayed if provided

```js
<PopupField
  placeHolder="Where to?"
  buttonLabel="Where"
  largeButtonValue="SYD"
  smallButtonValue="Sydney Kingsford Smith (SYD), Australia"
  headerLabel="Popup Field"
  HeaderIcon={PinIcon}
>
  <div>Content of the popup</div>
</PopupField>
```

### Render props

If the type of `children` provided is a function, the following render props are provided:

| Prop               | Type     | Description                                                      |
| ------------------ | -------- | ---------------------------------------------------------------- |
| closeDialog        | function | Closes the popup                                                 |
| setFocusElementRef | function | Sets ref on an element that will be focused when the popup opens |

```js
<PopupField
  buttonLabel="Where"
  placeHolder="Where to?"
  headerLabel="Popup Field"
  HeaderIcon={PinIcon}
>
  {({ closeDialog, setFocusElementRef }) => (
    <div>
      <div>Render Custom Content</div>
      <input type="text" ref={setFocusElementRef} />
      <button onClick={closeDialog}>Close</button>
    </div>
  )}
</PopupField>
```
