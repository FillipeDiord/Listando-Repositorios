export function RepositoryItem(props) {
    const repositoryName = props.repository.name;
    const repositoryDescription = props.repository.description;
    const repositoryLink = props.repository.html_url;

    return (
        <li>
            <strong>{repositoryName}</strong>
            <p>{repositoryDescription}</p>

            <a href={repositoryLink}>
                Acessar repositório
            </a>
        </li>
    );
}