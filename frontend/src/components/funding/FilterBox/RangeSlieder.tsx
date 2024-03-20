import * as r from '@components/funding/FilterBox/RangeSlieder.styled'
import { Ranger, useRanger } from '@tanstack/react-ranger'
import { Dispatch, SetStateAction, useRef } from 'react'

const RangeSlieder = (props: {
  values: ReadonlyArray<number>
  setValues: Dispatch<SetStateAction<ReadonlyArray<number>>>
}) => {
  const { values, setValues } = props
  const rangerRef = useRef<HTMLDivElement>(null)

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: 0,
    max: 100,
    stepSize: 10,
    onChange: (instance: Ranger<HTMLDivElement>) =>
      setValues(instance.sortedValues),
  })

  return (
    <r.Container>
      <r.Track ref={rangerRef}>
        {rangerInstance.getTicks().map(({ value, key, percentage }) => (
          <r.Tick key={key} $percentage={percentage}>
            <r.TickLabel>{value}</r.TickLabel>
          </r.Tick>
        ))}
        {rangerInstance.getSteps().map(({ left, width }, i) => (
          <r.Segment key={i} $index={i} $left={left} $width={width} />
        ))}
        {rangerInstance
          .handles()
          .map(
            (
              {
                value,
                onKeyDownHandler,
                onMouseDownHandler,
                onTouchStart,
                isActive,
              },
              i,
            ) => (
              <r.Handle
                key={i}
                onKeyDown={onKeyDownHandler}
                onMouseDown={onMouseDownHandler}
                onTouchStart={onTouchStart}
                $left={rangerInstance.getPercentageForValue(value)}
                $active={isActive}
              >
                {value}
              </r.Handle>
            ),
          )}
      </r.Track>
    </r.Container>
  )
}

export default RangeSlieder
