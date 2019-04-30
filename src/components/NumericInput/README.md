### NumericInput

```js
    <StatefulManager initial={4}>
    {({ value, updater }) => (
        <NumericInput
            label="Children (2-11 yrs)"
            id="someId1"
            min={0}
            onChange={updater}
            value={value}
        />
    )}
    </StatefulManager>
    <div style={{ height: '20px' }}/>

        <StatefulManager initial={4}>
    {({ value, updater }) => (
        <NumericInput
            label="Children (2-11 yrs)"
            id="someId2"
            min={0}
            max={6}
            onChange={updater}
            value={value}
        />
    )}
    </StatefulManager>
```