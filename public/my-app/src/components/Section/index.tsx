import * as React from 'react';

interface Props {
    children?: any | any[];
    id?: string;
    name: string;
}

export default function Section(props: Props) {
    const {children, id, name} = props;

    return (
        <section id={id}>
            <a id={name}/>
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo ornare sapien at tristique. Aliquam non elit ut mi elementum pretium. Curabitur porta mauris vitae nisi bibendum, ut lacinia lectus congue. Nam quam libero, luctus et semper at, mollis sed est. Aliquam porttitor tortor nisl, pulvinar porttitor felis varius mattis. Sed congue elementum leo, porta aliquam quam gravida a. Praesent a ante eu diam placerat faucibus eu id elit. Maecenas imperdiet nunc ac nisl interdum, nec laoreet purus tempor. Sed tristique sapien eu orci vehicula dictum. Integer malesuada, ipsum et egestas blandit, odio diam elementum sapien, a rutrum ex dui vitae eros.</p>
            {/*<p>Mauris ac ante dolor. Nam tristique massa in tempus commodo. Curabitur dapibus magna tellus, in viverra mi porttitor vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. In venenatis nibh et elit facilisis, in commodo erat dignissim. Maecenas non erat ultrices, accumsan mauris non, pharetra orci. Mauris nec volutpat quam. Nullam posuere sollicitudin mi eget imperdiet. Donec ut augue non est efficitur pellentesque. Morbi pellentesque, felis vitae fringilla tincidunt, diam justo tristique libero, in fringilla tortor metus vel sem. Quisque ac semper purus. Nam vehicula justo eu luctus finibus. Aliquam tempor erat id malesuada blandit.</p>*/}
            {/*<p>Proin ac eros at sem finibus pellentesque. Nam rhoncus accumsan ante sit amet semper. Aliquam a porttitor dolor. Cras sit amet sollicitudin purus. Nunc viverra nibh arcu, quis condimentum purus facilisis ac. Vivamus eleifend mollis lorem, at aliquam metus rutrum vel. In a mi elementum, suscipit elit id, bibendum ante. Nullam a dignissim nibh. Nulla rhoncus porta elit ac dictum. Proin laoreet justo odio, a porttitor est fermentum eget.</p>*/}
            {/*<p>Ut eget dolor nec est tempus accumsan quis nec ante. Fusce ut mauris a arcu facilisis molestie. Vestibulum auctor cursus felis, ac tempor ex egestas a. Cras non quam sit amet tellus tincidunt porta vitae in eros. Sed scelerisque ipsum nibh, et ultrices lacus finibus molestie. Fusce a purus urna. Maecenas facilisis pretium diam, ac egestas dolor viverra vitae. Aliquam enim arcu, vulputate vitae ultrices sit amet, porta a urna. Etiam semper commodo euismod. Phasellus consequat dictum nisi vitae mollis. Curabitur ac tincidunt diam. Proin mauris ante, euismod id tincidunt in, faucibus at magna. Praesent dignissim placerat dolor, sed gravida felis aliquam in. Morbi laoreet metus sed dolor bibendum, ut luctus ante hendrerit. Mauris quis magna sed nibh vehicula blandit id vitae lorem.</p>*/}
            {/*<p>Nunc tristique diam sem, et sodales nibh molestie sit amet. Pellentesque quis ultricies diam. Aenean non porttitor leo, sed placerat sapien. Nulla facilisi. Vestibulum a erat id purus ullamcorper mattis nec quis dui. Nulla facilisi. Integer pharetra quam quis erat iaculis faucibus. Quisque eget consectetur est, et venenatis ante. Sed ut sapien auctor, venenatis lectus nec, elementum est. Morbi vitae accumsan felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis viverra eget est vel sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut urna varius, vehicula massa vitae, condimentum mauris.</p>*/}
            {children}
        </section>
    );
};
