import { ImageResponse } from 'next/og';

export const alt = 'Joshua Zone — Software Engineering Leader';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default function OGImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
					background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
					padding: '80px',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '32px',
						marginBottom: '40px',
					}}
				>
					<div
						style={{
							width: '88',
							height: '88',
							borderRadius: '18px',
							background: 'rgba(255,255,255,0.15)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '48px',
							fontWeight: 700,
							color: 'white',
							letterSpacing: '-1px',
						}}
					>
						JZ
					</div>
				</div>
				<div
					style={{
						fontSize: '64px',
						fontWeight: 700,
						color: 'white',
						lineHeight: 1.1,
						marginBottom: '16px',
						letterSpacing: '-1px',
					}}
				>
					Joshua Zone
				</div>
				<div
					style={{
						fontSize: '32px',
						fontWeight: 400,
						color: 'rgba(255,255,255,0.85)',
						lineHeight: 1.4,
						marginBottom: '32px',
					}}
				>
					Software Engineering Leader · Principal Architect
				</div>
				<div
					style={{
						display: 'flex',
						gap: '24px',
					}}
				>
					{['11+ Years', '9 Companies', '15+ Engineers Led'].map((stat) => (
						<div
							key={stat}
							style={{
								background: 'rgba(255,255,255,0.12)',
								borderRadius: '12px',
								padding: '12px 24px',
								fontSize: '22px',
								fontWeight: 500,
								color: 'rgba(255,255,255,0.9)',
							}}
						>
							{stat}
						</div>
					))}
				</div>
				<div
					style={{
						position: 'absolute',
						bottom: '40px',
						right: '80px',
						fontSize: '20px',
						color: 'rgba(255,255,255,0.5)',
					}}
				>
					zonejm.netlify.app
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
