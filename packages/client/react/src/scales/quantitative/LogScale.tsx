import { log } from '@gog/scales'
import {
	QuantitativeScale,
	QuantitativeScaleProps,
	QuantitativeValue,
} from './QuantitativeScale'

export interface LogScaleProps
	extends QuantitativeScaleProps<QuantitativeValue, number> {
	base?: number
}

export class LogScale extends QuantitativeScale<
	LogScaleProps,
	QuantitativeValue,
	number
> {
	protected createScale() {
		return log(this.props.name)
			.table(this.props.table)
			.domain(this.props.domain)
			.bindDomain(this.props.bindDomain)
			.range(this.props.range)
			.bindRange(this.props.bindRange)
			.zero(this.props.zero)
			.clamp(this.props.clamp)
			.nice(this.props.nice)
			.base(this.props.base)
			.padding(this.props.padding)
			.reverse(this.isReversed)
			.build()
	}
}
