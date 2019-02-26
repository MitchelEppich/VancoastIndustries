const filters = props => {
    return (
        <div id="vcProduct-filters" className={props.shop.showFilters ? "showFilters" : ""}>
            <div className="vcFilter-list flex flex-col">
                <h3>Brands</h3>
                <label className="vcFilter-label">
                    All
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Crop King
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Sonoma
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Sunwest
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <h3>Type</h3>
                <label className="vcFilter-label">
                    All
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Hybrid
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Indica
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Sativa
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <h3>Strain Kind</h3>
                <label className="vcFilter-label">
                    All
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Autoflower
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Feminized
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    CBD
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Regular
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>

                <label className="vcFilter-label">
                    Mixes
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
            </div>

            <div
                onClick={() => props.toggleFilters(!props.shop.showFilters)}
                className="vcFilters-tab flex flex-col justify-center items-center">
                Filters
                <img src="../static/img/assets/icons/sort-icon.svg" alt="" />
            </div>
        </div>
    );
};
export default filters;
