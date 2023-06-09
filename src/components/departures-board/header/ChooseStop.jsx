import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useGetAll } from '../../../api'
import { resources } from '../../../constants'
import {
    departuresBoardActions,
    departuresBoardStopIdSelector,
} from '../../../redux/departures-board'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

const ChooseStop = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const value = useSelector(departuresBoardStopIdSelector)

    const { data, loading, loaded, errors } = useGetAll(resources.stops, {
        filter: { direction_id: 0 },
        fields: ['name'],
        perPage: 10,
    })

    const handleChange = useCallback(
        (e) => dispatch(departuresBoardActions.changeStop(e.target.value)),
        [dispatch],
    )

    return (
        <div>
            {loading && <div>Loading</div>}
            {errors && (
                <div>
                    {errors.map(
                        ({ status, title, source, detail }) => `${status} -> ${title || detail} -> param: ${source.parameter}`,
                    )}
                </div>
            )}

            <FormControl className={classes.formControl}>
                <InputLabel id="choose-stop-select-label">Choose Stop</InputLabel>
                <Select
                    labelId="choose-stop-select-label"
                    id="choose-stop-select"
                    value={value}
                    onChange={handleChange}
                >
                    {!loading && loaded && data.map((x) => <MenuItem value={x.id}>{`${x.attributes.name}`}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default ChooseStop
