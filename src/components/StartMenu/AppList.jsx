const AppList = (props) => {
	const categorylist = [
		{
			name: "Recently added",
			children: [
				{
					name: "Git Bash",
					imgSrc:
						"https://hasura.io/blog/content/images/downloaded_images/setting-up-git-bash-for-windows-e26b59e44257/1-Je4yF-xdHEluVvmS0qw8JQ.png"
				},
				{
					name: "Symantec Endpoint Protection",
					imgSrc:
						"https://www.lclark.edu/live/image/gid/8/width/1260/crop/1/48197_symantec-endpoint-protection-icon-logo.rev.1407948519.png"
				},
				{
					name: "Git for Windows",
					imgSrc: "https://aux2.iconspalace.com/uploads/448592549.png"
				}
			]
		},
		{
			name: "#",
			children: [
				{
					name: "Git Bash",
					imgSrc:
						"https://hasura.io/blog/content/images/downloaded_images/setting-up-git-bash-for-windows-e26b59e44257/1-Je4yF-xdHEluVvmS0qw8JQ.png"
				},
				{
					name: "Symantec Endpoint Protection",
					imgSrc:
						"https://www.lclark.edu/live/image/gid/8/width/1260/crop/1/48197_symantec-endpoint-protection-icon-logo.rev.1407948519.png"
				},
				{
					name: "Git for Windows",
					imgSrc: "https://aux2.iconspalace.com/uploads/448592549.png"
				}
			]
		},
		{
			name: "A",
			children: [
				{
					name: "Git Bash",
					imgSrc:
						"https://hasura.io/blog/content/images/downloaded_images/setting-up-git-bash-for-windows-e26b59e44257/1-Je4yF-xdHEluVvmS0qw8JQ.png"
				},
				{
					name: "Symantec Endpoint Protection",
					imgSrc:
						"https://www.lclark.edu/live/image/gid/8/width/1260/crop/1/48197_symantec-endpoint-protection-icon-logo.rev.1407948519.png"
				},
				{
					name: "Git for Windows",
					imgSrc: "https://aux2.iconspalace.com/uploads/448592549.png"
				}
			]
		},
		{
			name: "B",
			children: [
				{
					name: "Git Bash",
					imgSrc:
						"https://hasura.io/blog/content/images/downloaded_images/setting-up-git-bash-for-windows-e26b59e44257/1-Je4yF-xdHEluVvmS0qw8JQ.png"
				},
				{
					name: "Symantec Endpoint Protection",
					imgSrc:
						"https://www.lclark.edu/live/image/gid/8/width/1260/crop/1/48197_symantec-endpoint-protection-icon-logo.rev.1407948519.png"
				},
				{
					name: "Git for Windows",
					imgSrc: "https://aux2.iconspalace.com/uploads/448592549.png"
				}
			]
		},
		{
			name: "C",
			children: [
				{
					name: "Git Bash",
					imgSrc:
						"https://hasura.io/blog/content/images/downloaded_images/setting-up-git-bash-for-windows-e26b59e44257/1-Je4yF-xdHEluVvmS0qw8JQ.png"
				},
				{
					name: "Symantec Endpoint Protection",
					imgSrc:
						"https://www.lclark.edu/live/image/gid/8/width/1260/crop/1/48197_symantec-endpoint-protection-icon-logo.rev.1407948519.png"
				},
				{
					name: "Git for Windows",
					imgSrc: "https://aux2.iconspalace.com/uploads/448592549.png"
				}
			]
		},
		{
			name: "D",
			children: [
				{
					name: "Git Bash",
					imgSrc:
						"https://hasura.io/blog/content/images/downloaded_images/setting-up-git-bash-for-windows-e26b59e44257/1-Je4yF-xdHEluVvmS0qw8JQ.png"
				},
				{
					name: "Symantec Endpoint Protection",
					imgSrc:
						"https://www.lclark.edu/live/image/gid/8/width/1260/crop/1/48197_symantec-endpoint-protection-icon-logo.rev.1407948519.png"
				},
				{
					name: "Git for Windows",
					imgSrc: "https://aux2.iconspalace.com/uploads/448592549.png"
				}
			]
		}
	];

	return (
		<div {...props} className="app-list">
			{categorylist.map((cat) => (
				// <>
					/* <div className="category mouse-hover" key={cat.name}>{cat.name}</div> */
					cat.children.map((app) => (
						<div className="application mouse-hover" key={app.name}>
							<img src={app.imgSrc} alt={`${app.name} icon`} />
							{` ${app.name}`}
						</div>
					))
				// </>
			))}
		</div>
	);
};

export default AppList;
